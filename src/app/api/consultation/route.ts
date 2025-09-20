import { NextRequest, NextResponse } from 'next/server';
import { authAdmin, dbAdmin } from '@/lib/firebaseAdmin';

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  currentChallenges: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  additionalInfo: string;
}

export async function POST(request: NextRequest) {
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
