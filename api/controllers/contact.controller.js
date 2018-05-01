import sanitizeHtml from 'sanitize-html';
import { sendMail } from '../../mail';

export const createContact = async (req, res) => {
  sendMail({
    subject: 'Narative test email',
    template: 'Contact'
  });

  res.status(200).send({ data: { success: true }, errors: [] });
};
