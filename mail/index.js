import React from 'react';
import Oy from 'oy-vey';
import htmlToText from 'html-to-text';
import emails from './templates';
import styles from './styles';
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendMail(options) {
  const { data, to, from, subject, template } = options;
  console.log({ options });

  const EmailTemplate = emails[template];
  const html = Oy.renderTemplate(<EmailTemplate data={data} />, {
    title: subject,
    previewText: subject,
    headCSS: styles,
  });
  const text = htmlToText.fromString(html);

  console.log(data.email);
  const message = {
    from: `Narative <info@narative.co`,
    to: data.email,
    subject,
    text,
    html,
  };

  console.log(html);

  return sgMail.send(message);
}
