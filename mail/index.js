import React from 'react';
import Oy from 'oy-vey';
import htmlToText from 'html-to-text';
import emails from './templates';
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendMail(options) {
  const { to, from, subject } = options;

  const EmailTemplate = emails[template];
  const html = Oy.renderTemplate(<EmailTemplate options={options} />, {
    title: subject,
    previewText: subject
  });
  const text = htmlToText.fromString(html);

  const message = {
    from: `Dennis Brotzky <noreply@narative.co`,
    to: 'dennis@narative.co',
    subject,
    text,
    html
  };

  return sgMail.send(message);
}
