import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

// Pre-load the font to avoid filesystem access during request processing.
// This is more robust for serverless environments where the file system is not guaranteed.
let robotoFont: Buffer | undefined;
try {
  const fontPath = path.join(process.cwd(), "public", "fonts", "Roboto-Regular.ttf");
  robotoFont = fs.readFileSync(fontPath);
} catch (e) {
  console.error("Could not pre-load font. PDF generation will likely fail.", e);
}

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Create a PDF document
    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      const doc = new PDFDocument({
        size: "A4",
        margin: 50,
        font: '', // Prevent pdfkit from loading the default Helvetica font.
      });

      const chunks: Buffer[] = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      // Use the pre-loaded font buffer.
      if (robotoFont) {
        doc.font(robotoFont);
      } else {
        // This will likely fail in a serverless environment, but it's a fallback.
        console.warn("⚠️ Custom font not loaded. Falling back to Times-Roman. This may fail.");
        doc.font("Times-Roman");
      }

      doc.fontSize(20).text("Moving Quote Request", { align: "center" });
      doc.moveDown();

      // Add form data to the PDF
      Object.entries(formData).forEach(([key, value]) => {
        // A simple way to make keys more readable
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
        doc.fontSize(12).text(`${formattedKey}: ${String(value)}`);
      });

      doc.end();
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: "New Moving Quote Request",
      text: "A new moving quote request has been submitted. Please find the details in the attached PDF.",
      attachments: [
        {
          filename: "quote.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Error in send-quote route:", err);
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
