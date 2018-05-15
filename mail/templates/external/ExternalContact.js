import React from 'react';
import dayjs from 'dayjs';
import Layout from '../../layouts/Layout';
import Header from '../../components/Header';
import Body from '../../components/Body';
import EmailButton from '../../components/EmailButton';
import EmailRow from '../../components/EmailRow';
import EmptySpace from '../../components/EmptySpace';

export default ({ data }) => (
  <Layout>
    <Body>
      <EmailRow width="100%" fontSize="24px" fontWeight="600">
        Hi, {data.name && data.name.split(' ')[0]}
      </EmailRow>
      <EmailRow>
        Thank you for contacting Narative. We have received your project
        proposal and will get back to you within 24 hours. If you don't hear
        anything back don't hestitate to email us directly at info@narative.co.
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow width="100%" fontSize="24px" fontWeight="600">
        Your project request
      </EmailRow>
      <EmailRow>
        <strong>Size of company</strong>
        <br />
        {data.companySize || (
          <span style={{ color: '#8e8e8e' }}>Not provided</span>
        )}
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow>
        <strong>About your project</strong>
        <br />
        {data.project || <span style={{ color: '#8e8e8e' }}>Not provided</span>}
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow>
        <strong>The details</strong>
        <br />
        {data.details || <span style={{ color: '#8e8e8e' }}>Not provided</span>}
      </EmailRow>
    </Body>
  </Layout>
);
