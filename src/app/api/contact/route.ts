import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getMongoClient } from "@/lib/mongodb";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court").max(100),
  email: z.string().email("Email invalide"),
  phone: z.string().optional().default(""),
  subject: z.string().min(3, "Sujet trop court").max(200),
  message: z.string().min(10, "Message trop court").max(2000),
  countryCode: z.string().optional().default("+212"),
});

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 3;
  const record = rateLimitMap.get(ip);
  if (!record || now - record.lastReset > windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de requetes. Reessayez dans une minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const client = await getMongoClient();
    const db = client.db("venerti");
    await db.collection("contacts").insertOne({
      name,
      email,
      phone: phone || "Non renseigne",
      subject,
      message,
      createdAt: new Date(),
      status: "new",
      ip,
    });

    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: "Venerti Contact <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `Nouveau message : ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fdf9; border-radius: 16px;">
          <div style="background: #1B7A3E; padding: 24px 32px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau message — Venerti</h1>
          </div>
          <div style="background: white; padding: 24px 32px; border-radius: 12px; border: 1px solid #e8f5ed;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px; width: 120px;">Nom</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Telephone</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600;">${phone || "Non renseigne"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 0; color: #888; font-size: 13px;">Sujet</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111; line-height: 1.7;">${message}</td>
              </tr>
            </table>
          </div>
          <p style="color: #aaa; font-size: 12px; text-align: center; margin-top: 24px;">
            Recu via venertiweb.com — ${new Date().toLocaleString("fr-FR")}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message recu. On vous repond dans 24h." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Reessayez." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}