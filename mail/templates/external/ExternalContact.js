import React from 'react';
import Layout from '../../layouts/Layout';
import Header from '../../components/Header';
import Body from '../../components/Body';
import EmailButton from '../../components/EmailButton';
import EmailRow from '../../components/EmailRow';

export default ({ data }) => (
  <Layout>
    <Body>
      <EmailRow width="100%" fontSize="32px" fontWeight="600">
        Hi, {data.name && data.name.split(' ')[0]}
      </EmailRow>
      <EmailRow>
        Thank you for contacting Narative. We have received your project
        proposal and will get back to you within 24 hours.
      </EmailRow>
    </Body>
  </Layout>
);
