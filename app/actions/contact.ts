"use server";

import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactResponse = {
  success: boolean;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_RECEIVER_EMAIL =
  process.env.CONTACT_RECEIVER_EMAIL ?? "nyinyizin1818@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<ContactResponse> {
  const name = data.name.trim();
  const email = data.email.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  // Validate on server side
  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return {
      success: false,
      message: "Message must be at least 10 characters.",
    };
  }

  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    return {
      success: false,
      message:
        "Email service is not configured. Please set SMTP_EMAIL and SMTP_PASSWORD.",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    await transporter.verify();

    // Email to you (the portfolio owner)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpEmail}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">From your portfolio website</p>
          </div>
          <div style="padding: 32px; color: #e2e8f0;">
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600;">${safeName}</p>
              <p style="margin: 4px 0 0; color: #3b82f6;">${safeEmail}</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600;">${safeSubject}</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px;">
              <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
            </div>
          </div>
          <div style="padding: 20px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; color: #64748b; font-size: 12px;">Reply directly to this email to respond to ${safeName}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    try {
      await transporter.sendMail({
        from: `"Nyi Nyi Zin" <${smtpEmail}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You! 🙏</h1>
          </div>
          <div style="padding: 32px; color: #e2e8f0;">
            <p style="font-size: 16px; line-height: 1.7;">Hi <strong>${safeName}</strong>,</p>
            <p style="font-size: 14px; line-height: 1.7; color: #94a3b8;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible, usually within 24 hours.
            </p>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase;">Your message</p>
              <p style="margin: 0; font-size: 14px; color: #94a3b8; font-style: italic;">"${safeSubject}"</p>
            </div>
            <p style="font-size: 14px; color: #94a3b8;">Best regards,<br/><strong style="color: #e2e8f0;">Nyi Nyi Zin</strong><br/>Full-Stack Developer</p>
          </div>
        </div>
      `,
      });
    } catch (autoReplyError) {
      console.error("Auto-reply failed:", autoReplyError);
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
