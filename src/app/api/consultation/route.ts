import { NextRequest, NextResponse } from 'next/server';
import { authAdmin, dbAdmin } from '@/lib/firebaseAdmin';
import { ConsultationFormData } from '@/lib/types';
import { Resend } from 'resend';
import ProspectConfirmation from '@/emails/ProspectConfirmation';
import InternalNotification from '@/emails/InternalNotification';

export async function POST(request: NextRequest) {
  if (!dbAdmin) {
    return NextResponse.json(
      { error: 'Firebase Admin SDK not initialized.' },
      { status: 500 }
    );
  }

  try {
    const data: ConsultationFormData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'company', 'businessType', 'currentChallenges'];
    const missingFields = requiredFields.filter(field => !data[field as keyof ConsultationFormData]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create submission record
    const submission = {
      ...data,
      submittedAt: new Date().toISOString()
    };

    // Store the submission in Firestore
    const docRef = await dbAdmin.collection('consultations').add(submission);

    console.log('New consultation submission:', { id: docRef.id, ...submission });

    // Send emails
    try {
      console.log('Attempting to send emails...');
      console.log('FROM_EMAIL:', process.env.FROM_EMAIL);
      console.log('INTERNAL_NOTIFICATION_EMAIL:', process.env.INTERNAL_NOTIFICATION_EMAIL);
      console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);

      // Initialize Resend only when needed
      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY not found, skipping email sending');
      } else {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Email to Prospect
        const prospectEmailResult = await resend.emails.send({
          from: process.env.FROM_EMAIL!,
          to: data.email,
          subject: 'Thank You for Your Consultation Request',
          react: ProspectConfirmation({ name: data.name }),
        });
        console.log('Prospect email sent:', prospectEmailResult);

        // Email to Internal Team
        const internalEmailResult = await resend.emails.send({
          from: process.env.FROM_EMAIL!,
          to: process.env.INTERNAL_NOTIFICATION_EMAIL!,
          subject: 'New Consultation Form Submission',
          react: InternalNotification(data),
        });
        console.log('Internal email sent:', internalEmailResult);

        console.log('Confirmation and notification emails sent successfully.');
      }
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      console.error('Email error details:', JSON.stringify(emailError, null, 2));
      // We don't want to block the user response for an email error
      // but we should log it for monitoring.
    }

    // Send Slack Notification
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        const slackMessage = {
          text: `🎉 New Consultation Request from ${data.name} (${data.company})`,
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: '🎉 New Consultation Request',
              },
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*Name:*\n${data.name}` },
                { type: 'mrkdwn', text: `*Email:*\n${data.email}` },
                { type: 'mrkdwn', text: `*Company:*\n${data.company}` },
                { type: 'mrkdwn', text: `*Phone:*\n${data.phone}` },
              ],
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Challenges:*\n${data.currentChallenges}`,
              },
            },
          ],
        };

        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage),
        });

        console.log('Slack notification sent successfully.');
      } catch (slackError) {
        console.error('Error sending Slack notification:', slackError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation form submitted successfully',
      id: docRef.id
    });

  } catch (error) {
    console.error('Error processing consultation form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  if (!authAdmin || !dbAdmin) {
    return NextResponse.json(
      { error: 'Firebase Admin SDK not initialized.' },
      { status: 500 }
    );
  }

  try {
    const authorization = request.headers.get('Authorization');
    if (!authorization?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const idToken = authorization.split('Bearer ')[1];
    await authAdmin.verifyIdToken(idToken);

    // Fetch from Firestore
    const querySnapshot = await dbAdmin.collection('consultations').get();
    const consultationSubmissions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({
      success: true,
      data: consultationSubmissions,
      count: consultationSubmissions.length
    });
  } catch (error: any) {
    if (error.code === 'auth/id-token-expired' || error.code === 'auth/argument-error') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching consultation submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
