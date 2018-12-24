const fs = require('fs');
const path = require('path');

import React from 'react';
import Oy from 'oy-vey';
import htmlToText from 'html-to-text';

import emails from './templates';
import generateCustomTemplate from './custom/generateCustomTemplate';
import styles from './styles';

const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendMail(options) {
  // No need to send emails if they're disabled
  if (
    process.env.NODE_ENV === 'developement' &&
    process.env.EMAILS === 'disabled'
  ) {
    return console.log(`Sent ${template}. Emails disabled in development.`);
  }

  const {
    attachments,
    data,
    external = true,
    internal,
    from,
    previewText,
    subject,
    template,
    to
  } = options;

  const EmailTemplate = emails[template];
  const html = Oy.renderTemplate(
    <EmailTemplate data={data} />,
    {
      title: subject,
      previewText,
      headCSS: styles
    },
    templateOptions => generateCustomTemplate(templateOptions)
  );

  const message = {
    from,
    to,
    subject,
    html
  };

  if (attachments && attachments.length) {
    message.attachments = await handleAttachments(attachments);
  }

  /**
   * If the email is flagged as internal: true then we'll also send
   * an email to Narative's internal system for review.
   */
  if (internal) {
    sendInternalMail(options);
  }

  // Default is to always send the external copy
  if (external) {
    return sgMail.send(message);
  }
}

/**
 * sendInternalMail()
 * Will send an email to Narative's internal contact email.
 * to: 'contact@narative.co'
 *
 * @param {Object} options
 */
export function sendInternalMail(options) {
  const { data, subject, template } = options;

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

  // contact@narative.co integrates into Slack
  const message = {
    from: `Narative <system@narative.co>`,
    to: 'contact@narative.co',
    subject,
    text: internalText,
    html: internalHtml
  };

  return sgMail.send(message);
}

async function handleAttachments(attachments) {
  return await Promise.all(
    attachments.map(async file => {
      const buffer = await fs.readFileSync(path.resolve(__dirname, file.path));
      const content = buffer.toString('base64');

      return {
        filename: file.name,
        content,
        type: file.type,
        disposition: 'attachment'
      };
    })
  );
}
