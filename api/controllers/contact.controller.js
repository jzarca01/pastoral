import sanitizeHtml from 'sanitize-html';
import { sendMail } from '../../mail';

export const createContact = async (req, res) => {
  try {
    const firstName = (req.body.name && req.body.name.split(' ')[0]) || '';

    // Sending an email back to the sender
    sendMail({
      template: 'ExternalContact',
      // internal: true,
      from: `Mack <mack@narative.co>`,
      to: req.body.email,
      subject: 'Next steps',
      previewText: `Hi${' ' + firstName}, Let's make something great!`,
      data: { ...req.body, location: req.location },
      attachments: [
        {
          path: './attachments/pdfs/Narative-Welcome.pdf',
          name: 'Narative-Welcome.pdf',
          type: 'application/pdf'
        }
      ]
    });
  } catch (err) {
    console.warn(err);

    return res.status(500).send({
      data: { success: true },
      errors: ['INTERNAL_ERROR'],
      errorMessage: 'Error processing contact request'
    });
  }

  return res.status(200).send({ data: { success: true }, errors: [] });
};

export const createContactPhone = async (req, res) => {
  try {
    // Sending an email back to the sender
    sendMail({
      subject: 'Narative phone call',
      template: 'InternalContactPhone',
      internal: true,
      external: false,
      previewText: `Internal email`,
      data: {
        phone: req.body.phone,
        email: 'info@narative.co',
        location: req.location
      }
    });
  } catch (err) {
    return res.status(500).send({
      data: { success: true },
      errors: ['INTERNAL_ERROR'],
      errorMessage: 'Error processing contact request'
    });
  }

  return res.status(200).send({ data: { success: true }, errors: [] });
};
