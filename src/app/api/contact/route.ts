import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Rai Clark Website <onboarding@resend.dev>',
      to: ['declerckroy@gmail.com'], // Tijdelijk voor testing - verander later naar rai@raiclark.nl na domein verificatie
      replyTo: email,
      subject: `Nieuw contactformulier: ${projectType}`,
      html: `
        <h2>Nieuw bericht van raiclark.nl</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verzenden van je bericht. Probeer het opnieuw of mail direct naar rai@raiclark.nl' },
      { status: 500 }
    );
  }
}
