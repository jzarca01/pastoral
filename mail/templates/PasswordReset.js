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
      <EmailRow>We’ve received a request to reset your password.</EmailRow>
      <EmailRow>
        If you didn’t make the request, just ignore this message. Otherwise, you
        can reset your password using this link:
      </EmailRow>
      <EmailRow>
        <EmailButton
          link={props.options.resetUrl}
          text="Click here to reset your password"
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
