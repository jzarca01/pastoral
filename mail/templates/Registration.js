import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import EmailRow from '../components/EmailRow';

export default props => (
  <Layout>
    <Header />
    <Body>
      <EmailRow width="100%" fontSize="32px" fontWeight="600">
        Hi, {props.options.user.firstName}
      </EmailRow>
      <EmailRow>Welcome to Narative!</EmailRow>
      <EmailRow>
        Our goal is to create the best job board for the tech industry. We are
        continuously working on creating the leading platform on the web. We're
        so happy you decided to join our journey.
      </EmailRow>
      <EmailRow>
        How to post a job
        <br />
        <ol>
          <li>Create a new company</li>
          <li>Create a job posting</li>
        </ol>
      </EmailRow>

      <EmailRow>
        Thanks,
        <div>Narative</div>
      </EmailRow>
    </Body>
    <Footer />
  </Layout>
);
