
import { z } from 'zod';

export const SendEmailInputSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).describe("The sender's name."),
  email: z.string().email({ message: 'Please enter a valid email address.' }).describe("The sender's email address."),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500).describe('The message content.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export const SendEmailOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;
