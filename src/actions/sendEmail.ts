'use server';

import { Resend } from 'resend';
import { getErrorMessage } from '@/utils/errorHandling';
import { validateString } from '@/utils/validation';
import ContactFormEmail from '@/components/ContactFormEmail';
import { createElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(message, 750)) {
    return { error: 'Invalid message' };
  }

  if (!validateString(senderEmail, 150)) {
    return { error: 'Invalid sender email' };
  }

  try {
    const emailData = {
      from: process.env.RESEND_EMAIL_DOMAIN as string,
      to: process.env.MY_EMAIL as string,
      reply_to: senderEmail as string,
      subject: 'New portfolio message!',
      react: createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    };
    const response = await resend.emails.send(emailData);
    return {
      data: response.data,
      error: response.error ? `Failed to send email: ${getErrorMessage(response.error)}` : null,
    };
  } catch (error) {
    return { data: null, error: `Failed to send email: ${getErrorMessage(error)}` };
  }
};
