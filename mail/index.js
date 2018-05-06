import React from 'react';
import Oy from 'oy-vey';
import htmlToText from 'html-to-text';
import emails from './templates';
import styles from './styles';
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendMail(options) {
  const { data, to, from, subject, template, internal } = options;

  /**
   * If the email is flagged as internal: true then we'll also send
   * an email to Narative's internal system for review.
   */
  if (internal) {
    // internalSendMail(options);
  }

  const EmailTemplate = emails[template];
  const html = Oy.renderTemplate(<EmailTemplate data={data} />, {
    title: subject,
    previewText: subject,
    headCSS: styles
  });
  const text = htmlToText.fromString(html);

  const message = {
    from: `Narative <noreply@narative.co>`,
    to: data.email,
    subject,
    text,
    html
  };

  return sgMail.send(message);
}

export function internalSendMail(options) {
  const { data, to, from, subject, template, internal } = options;

  if (internal) {
    const InternalEmailTemplate =
      emails[template.replace('External', 'Internal')];

    const internalHtml = Oy.renderTemplate(
      <InternalEmailTemplate data={data} />,
      {
        title: subject,
        previewText: subject,
        headCSS: styles
      }
    );

    const internalText = htmlToText.fromString(internalHtml);

    const message = {
      from: `Narative <system@narative.co>`,
      to: 'dennis@narative.co',
      subject,
      text: internalText,
      html: internalHtml
    };

    return sgMail.send(message);
  }
}
