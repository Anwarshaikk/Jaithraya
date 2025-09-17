import { NextRequest, NextResponse } from 'next/server';

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

// In a real application, you would store this in a database
// For now, we'll store it in memory (this will reset when the server restarts)
let consultationSubmissions: (ConsultationFormData & { submittedAt: string; id: string })[] = [];

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
      id: `consultation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      submittedAt: new Date().toISOString()
    };

    // Store the submission
    consultationSubmissions.push(submission);

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send confirmation email to customer

    console.log('New consultation submission:', submission);

    return NextResponse.json({
      success: true,
      message: 'Consultation form submitted successfully',
      id: submission.id
    });

  } catch (error) {
    console.error('Error processing consultation form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // In a real application, you would fetch from database
    // For now, return the in-memory data
    return NextResponse.json({
      success: true,
      data: consultationSubmissions,
      count: consultationSubmissions.length
    });
  } catch (error) {
    console.error('Error fetching consultation submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
