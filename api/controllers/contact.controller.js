import sanitizeHtml from 'sanitize-html';
import { sendMail } from '../../mail';

export const createContact = async (req, res) => {
  try {
    // Sending an email back to the sender
    sendMail({
      subject: 'Narative project submission',
      template: 'ExternalContact',
      data: { ...req.body, location: req.location },
      internalCopy: true
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
