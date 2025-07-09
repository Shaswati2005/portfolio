
'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendEmail - A function that processes the contact form data and sends an email.
 */

import { ai } from '@/ai/genkit';
import { SendEmailInputSchema, SendEmailOutputSchema, type SendEmailInput, type SendEmailOutput } from '@/lib/schemas';
import nodemailer from 'nodemailer';

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    const { name, email, message } = input;

    const { EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, EMAIL_SERVER_HOST, EMAIL_SERVER_PORT, EMAIL_TO } = process.env;

    if (!EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD || !EMAIL_SERVER_HOST || !EMAIL_SERVER_PORT || !EMAIL_TO) {
        console.error("Missing required environment variables for sending email.");
        return {
            success: false,
            message: 'Server configuration error. Could not send email.',
        };
    }

    const transporter = nodemailer.createTransport({
        host: EMAIL_SERVER_HOST,
        port: parseInt(EMAIL_SERVER_PORT, 10),
        secure: parseInt(EMAIL_SERVER_PORT, 10) === 465, // true for 465, false for other ports
        auth: {
            user: EMAIL_SERVER_USER,
            pass: EMAIL_SERVER_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${name}" <${EMAIL_SERVER_USER}>`,
        to: EMAIL_TO,
        replyTo: email,
        subject: `New Portfolio Contact from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <h3>Message:</h3>
            <p style="padding: 12px; border-left: 4px solid #ccc; background-color: #f8f8f8;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
    };

    try {
        await transporter.verify();
        await transporter.sendMail(mailOptions);
        console.log('--- Email Sent Successfully ---');
        return {
            success: true,
            message: 'Your message has been sent successfully!',
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            message: 'There was a problem sending your message. Please try again later.',
        };
    }
  }
);


export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return await sendEmailFlow(input);
}
