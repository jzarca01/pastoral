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
        Hi, {props.options.user.firstName}
      </EmailRow>
      <EmailRow>
        You've been invited to join {props.options.company.displayName}
      </EmailRow>
      <EmailRow>
        If you don't want to join {props.options.company.displayName} please
        ignore this email.
      </EmailRow>
      <EmailRow>
        <EmailButton
          link={props.options.resetUrl}
          text="Click here to accept your invite"
        />
      </EmailRow>
      <EmailRow>
        Thanks,
        <div>Narative</div>
      </EmailRow>
    </Body>
    <Footer />
  </Layout>
);
