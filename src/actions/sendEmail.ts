'use server';

import { Resend } from 'resend';
import { getErrorMessage } from '../utils/errorHandling';
import { validateString } from '../utils/validation';
import ContactFormEmail from '../components/ContactFormEmail';
import { createElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')?.toString();
  const message = formData.get('message')?.toString();

  if (!validateString(message, 750)) {
    return { error: 'Invalid message' };
  }

  if (!validateString(senderEmail, 150)) {
    return { error: 'Invalid sender email' };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev', // process.env.RESEND_EMAIL_DOMAIN as string,
      to: process.env.MY_EMAIL as string,
      reply_to: senderEmail,
      subject: 'New portfolio message!',
      react: createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return { error: `Failed to send email: ${getErrorMessage(error)}` };
  }

  return { data };
};
