import React from 'react';
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
        Hi, Narative
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow>
        We've received a phone call request! Please contact{' '}
        <strong>
          <a href={`tel:+1${data.phone.replace(/\D/g, '')}`}>{data.phone}</a>
        </strong>
      </EmailRow>
    </Body>
  </Layout>
);
