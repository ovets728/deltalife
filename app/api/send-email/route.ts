import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, type, address, products } = body as {
    name?: string; email?: string; message?: string; type?: string; address?: string; products?: string;
  };

  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim() || typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (name.length > 200 || email.length > 254 || message.length > 5000) {
    return NextResponse.json({ error: "Field length exceeded" }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const subject = type === "quote" ? "Quotation Request" : "Inquiry from Contact Us page";

  let htmlContent = `<p><strong>Name:</strong> ${escapeHtml(name.trim())}</p><p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>`;
  if (typeof address === "string" && address.trim()) {
    htmlContent += `<p><strong>Address:</strong> ${escapeHtml(address.trim())}</p>`;
  }
  if (typeof products === "string" && products.trim()) {
    htmlContent += `<p><strong>Products:</strong> ${escapeHtml(products.trim())}</p>`;
  }
  htmlContent += `<p><strong>Message:</strong></p><p>${escapeHtml(message.trim()).replace(/\n/g, "<br>")}</p>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Delta Life <info@delta-life.com>",
      to: "info@delta-life.com",
      subject,
      html: htmlContent,
    });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
