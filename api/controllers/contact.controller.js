import sanitizeHtml from 'sanitize-html';
import { sendMail } from '../../mail';

export const createContact = async (req, res) => {
  sendMail({
    subject: 'Narative project submission',
    template: 'ExternalContact',
    data: req.body,
  });

  res.status(200).send({ data: { success: true }, errors: [] });
};
