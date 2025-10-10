import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

// Configure your email transport (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { firstName, lastName, email, subject, message, subscribe } = data;

    // Send email to your inbox
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // your inbox
      subject: subject || "New Project Inquiry",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Subscribe:</strong> ${subscribe ? "Yes" : "No"}</p>
      `,
    });

    // Save subscriber email if checkbox checked
    if (subscribe && email) {
      const subscribersPath = path.join(process.cwd(), "subscribers.json");

      let subscribers: string[] = [];
      if (fs.existsSync(subscribersPath)) {
        const fileData = fs.readFileSync(subscribersPath, "utf-8");
        subscribers = JSON.parse(fileData);
      }

      if (!subscribers.includes(email)) {
        subscribers.push(email);
        fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
      }
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
