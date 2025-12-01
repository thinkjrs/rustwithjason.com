import { type NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const msg = {
    to: email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL!,
      name: 'rustwithjason.com',
    },
    templateId: 'd-097b01a015c24603aaa4fec2df784061',
    dynamicTemplateData: {
      subject: 'Here are your free chapters!',
      // You can add other dynamic data for your template here
    },
  }

  try {
    await sgMail.send(msg)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    // For more details on SendGrid errors
    if (error instanceof Error && 'response' in error) {
      const sgError = error as any
      console.error(sgError.response.body)
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
