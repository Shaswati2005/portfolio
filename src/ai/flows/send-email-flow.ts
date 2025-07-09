
'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendEmail - A function that processes the contact form data.
 */

import { ai } from '@/ai/genkit';
import { SendEmailInputSchema, SendEmailOutputSchema, type SendEmailInput, type SendEmailOutput } from '@/lib/schemas';

// This is a placeholder for a real email sending service.
// In a real application, you would integrate with a service like SendGrid, Resend, or Nodemailer.
const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${input.name}`);
    console.log(`Email: ${input.email}`);
    console.log(`Message: ${input.message}`);
    console.log('------------------------------------');
    
    // Here you would add your email sending logic.
    // For this demo, we'll just simulate a successful response.
    
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  }
);


export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return await sendEmailFlow(input);
}
