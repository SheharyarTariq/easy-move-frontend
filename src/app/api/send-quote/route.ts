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

// Pre-load the logo to avoid filesystem access during request processing.
let logoBuffer: Buffer | undefined;
try {
  const logoPath = path.join(process.cwd(), "public", "assets", "logo.png");
  logoBuffer = fs.readFileSync(logoPath);
} catch (e) {
  console.error("Could not pre-load logo. PDF will be generated without it.", e);
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

      // Add the logo
      if (logoBuffer) {
        doc.image(logoBuffer, 50, 30, { width: 100 });
      }

            // Add date and time

      // Use the pre-loaded font buffer.
      if (robotoFont) {
        doc.font(robotoFont);
      } else {
        // This will likely fail in a serverless environment, but it's a fallback.
        console.warn("⚠️ Custom font not loaded. Falling back to Times-Roman. This may fail.");
        doc.font("Times-Roman");
      }
      
      doc.fontSize(20).text("Moving Quote Request", { align: "center" }).moveDown(3);
      doc.moveDown();

      const drawSectionHeader = (title: string) => {
        doc.fontSize(16).text(title).moveDown(0.5);
      };
    
      const drawField = (key: string, value: string | number | boolean | undefined | null) => {
        if (value === undefined || value === null) return; // Skip undefined or null values
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase());
        doc.fontSize(12).text(`${formattedKey}: ${String(value)}`);
      };

      // Add form data to the PDF
      drawSectionHeader("Customer Information");
      drawField("firstName", formData.firstName);
      drawField("lastName", formData.lastName);
      drawField("email", formData.email);
      drawField("telephone", formData.telephone);
      doc.moveDown();
    
      drawSectionHeader("Job Type");
      drawField("jobType", formData.jobType);
      doc.moveDown();
    
      drawSectionHeader("Pickup Address");
      drawField("pickupHouseNumber", formData.pickupHouseNumber);
      drawField("pickupStreetName", formData.pickupStreetName);
      drawField("pickupPostcode", formData.pickupPostcode);
      drawField("pickupPhoneNumber", formData.pickupPhoneNumber);
      drawField("pickupDisassembling", formData.pickupDisassembling);
      drawField("packagingRequired", formData.packagingRequired);
      doc.moveDown();
    
      drawSectionHeader("Dropoff Address");
      drawField("dropoffHouseNumber", formData.dropoffHouseNumber);
      drawField("dropoffStreetName", formData.dropoffStreetName);
      drawField("dropoffPostcode", formData.dropoffPostcode);
      drawField("dropoffPhoneNumber", formData.dropoffPhoneNumber);
      drawField("dropoffAssembling", formData.dropoffAssembling);
      doc.moveDown();

      if (formData.jobType !== 'single') {
        drawSectionHeader("Second Dropoff Address");
        drawField("secondDropoffHouseNumber", formData.secondDropoffHouseNumber);
        drawField("secondDropoffStreetName", formData.secondDropoffStreetName);
        drawField("secondDropoffPostcode", formData.secondDropoffPostcode);
        drawField("secondDropoffPhoneNumber", formData.secondDropoffPhoneNumber);
        drawField("secondDropoffAssembling", formData.secondDropoffAssembling);
        doc.moveDown();
      }

      drawSectionHeader("Additional Notes");
      drawField("additionalNotes", formData.additionalNotes);

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
      text: `Hello EasyMove,

A new quote request has been submitted through your website.
Please find the full details in the attached PDF.

This request includes:
- Customer contact information
- Pickup and drop-off addresses
- Any additional notes from the customer

Kindly review the attachment and follow up with the client to provide a tailored quote.

Best regards,
EasyMove Website System`,
  html: `
    <p>Hello <b>EasyMove</b>,</p>
    <p>A new <b>quote request</b> has been submitted through your website.<br/>
    Please find the full details in the attached PDF.</p>

    <p>This request includes:</p>
    <ul>
      <li>Customer contact information</li>
      <li>Pickup and drop-off addresses</li>
      <li>Any additional notes from the customer</li>
    </ul>

    <p>Kindly review the attachment and follow up with the client to provide a tailored quote.</p>
    <p>Best regards,<br/>EasyMove Website System</p>
  `,
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
