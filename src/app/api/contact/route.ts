import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const requiredFields = ["name", "email", "company", "budget", "timeline", "message"] as const;
  const missing = requiredFields.filter((field) => !body[field]?.trim());

  if (missing.length > 0 || !body.email || !isValidEmail(body.email)) {
    return NextResponse.json(
      {
        success: false,
        message: "Please provide all required fields with a valid email.",
      },
      { status: 400 }
    );
  }

  console.log("New contact submission:", {
    name: body.name,
    email: body.email,
    company: body.company,
    website: body.website || "N/A",
    budget: body.budget,
    timeline: body.timeline,
    message: body.message,
  });

  return NextResponse.json({ success: true });
}
