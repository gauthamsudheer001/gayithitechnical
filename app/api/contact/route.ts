import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gauthamsudheer001@gmail.com", // 👈 your Gmail
      subject: "New HVAC Website Contact",
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
  } catch (error) {
    return Response.json({ success: false });
  }
}
