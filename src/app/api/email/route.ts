import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
  };

  console.log(subject, process.env.EMAIL, process.env.PASSWORD);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject,
      text: "example",
      html: `<h1>${message}</h1>`,
    });
    return new Response("Email sent", {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
