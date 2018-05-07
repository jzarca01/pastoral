import React from 'react';
import Layout from '../../layouts/Layout';
import Header from '../../components/Header';
import Body from '../../components/Body';
import EmailButton from '../../components/EmailButton';
import EmailRow from '../../components/EmailRow';

export default ({ data }) => (
  <Layout>
    <Body>
      <EmailRow width="100%" fontSize="24px" fontWeight="600">
        Hi,
      </EmailRow>
      <EmailRow>Thank you for contacting Narative.</EmailRow>
      <EmailRow>
        We'll call you at <strong>{data.phone}</strong>.
      </EmailRow>
    </Body>
  </Layout>
);
