import dotenv from 'dotenv';
dotenv.config();

console.log('--- Genkit Server Starting ---');
if (process.env.EMAIL_SERVER_USER && process.env.GOOGLE_API_KEY) {
    console.log('Found EMAIL_SERVER_USER and GOOGLE_API_KEY in environment.');
} else if (process.env.EMAIL_SERVER_USER) {
    console.warn('GOOGLE_API_KEY environment variable might be missing.');
} else {
    console.warn('EMAIL_SERVER_USER environment variable might be missing.');
}

// Flows will be imported for their side effects in this file.
import './flows/send-email-flow';
