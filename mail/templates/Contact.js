import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import EmailButton from '../components/EmailButton';
import EmailRow from '../components/EmailRow';

export default props => (
  <Layout>
    <Header />
    <Body>
      <EmailRow width="100%" fontSize="32px" fontWeight="600">
        Hi,
      </EmailRow>
      <EmailRow>This is a test email.</EmailRow>
      <EmailRow>
        <EmailButton link="https://narative.co" text="Narative" />
      </EmailRow>
      <EmailRow>
        Thanks,
        <div>Narative</div>
      </EmailRow>
    </Body>
    <Footer />
  </Layout>
);
