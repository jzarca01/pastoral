import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import EmailRow from '../components/EmailRow';
import EmptySpace from '../components/EmptySpace';

export default props => (
  <Layout>
    <Header />
    <Body>
      <EmailRow width="100%" fontSize="32px" fontWeight="600">
        Hi {props.options.company.displayName},
      </EmailRow>
      <EmailRow>
        <strong>Payment confirmation</strong>
      </EmailRow>
      <EmailRow>
        <strong>Completed by</strong> <br />
        {props.options.user.firstName} {props.options.user.lastName} ({
          props.options.user.email
        })
      </EmailRow>
      <EmptySpace />
      <EmailRow>
        Thanks,
        <div>Narative</div>
      </EmailRow>
    </Body>
    <Footer />
  </Layout>
);
