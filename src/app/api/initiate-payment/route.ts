import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { amount, phone, email, name } = await req.json();

    if (!amount || (!phone && !email) || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const response = await fetch('https://api.flutterwave.com/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
      },
      body: JSON.stringify({
        tx_ref: `ryc-${Date.now()}`,
        amount,
        currency: 'GHS',
        payment_options: 'card, mobilemoneyghana',
        customer: { phone_number: phone, email, name },
        customizations: {
          title: 'Royalties Youth Church',
          description: 'Donation / Offering',
          logo: 'https://yourdomain.com/images/hryc.png',
        },
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Payment initiation failed', details: error }, { status: 500 });
  }
}
