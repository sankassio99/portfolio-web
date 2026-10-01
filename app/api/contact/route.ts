import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedSubjects = new Set([
  "Build a new application",
  "Modernize an existing system",
  "Architecture or performance",
  "Something else",
]);

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  if (typeof fields.website === "string" && fields.website.trim()) {
    return NextResponse.json({ message: "Thanks for your message." });
  }

  const { name, email, subject, message } = fields;
  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    name.length > 100 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    typeof subject !== "string" ||
    !allowedSubjects.has(subject.trim()) ||
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { message: "Check the form fields and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email.trim(),
        subject: `Portfolio inquiry: ${subject.trim()}`,
        text: `From: ${name.trim()} <${email.trim()}>\nTopic: ${subject.trim()}\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("Resend rejected a portfolio contact message", response.status);
      return NextResponse.json(
        { message: "Your message could not be delivered. Please try again later." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Email delivery is temporarily unavailable. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Message sent successfully." });
}