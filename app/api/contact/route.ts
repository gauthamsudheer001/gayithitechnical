import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const body = await req.json();
    const { name, phone, email, service, message } = body;

    await resend.emails.send({
      from: "Gayithi Technical <onboarding@resend.dev>",
      to: "gayithitechnical@gmail.com",
      subject: "New HVAC Website Contact",
      reply_to: email,
      html: `
        <h2>New Message from Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
