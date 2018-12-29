import React from 'react';
import Layout from '../../layouts/Layout';
import Body from '../../components/Body';
import EmailRow from '../../components/EmailRow';
import EmptySpace from '../../components/EmptySpace';

export default ({ data }) => (
  <Layout>
    <Body>
      <EmailRow width="100%" fontSize="24px" fontWeight="600">
        Hi, Narative
      </EmailRow>
      <EmptySpace height={10} />
      <EmailRow>
        We've received a project proposal from <strong>{data.name}</strong> in{' '}
        <strong>{data.location.city}</strong>.<br />
      </EmailRow>
      <EmptySpace height={10} />
      <EmailRow>
        <strong>Email</strong>
        <br />
        {data.email}
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow>
        <strong>Company</strong>
        <br />
        {data.company || <span style={{ color: '#8e8e8e' }}>Not provided</span>}
      </EmailRow>
      <EmptySpace height={16} />
      <EmptySpace height={16} />
      <EmailRow>
        <strong>Project details</strong>
        <br />
        {data.details || <span style={{ color: '#8e8e8e' }}>Not provided</span>}
      </EmailRow>
    </Body>
  </Layout>
);
