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
        Hi, Narative
      </EmailRow>
      <EmptySpace height={10} />
      <EmailRow>
        We've received a project proposal from <strong>{data.name}</strong> in{' '}
        <strong>{data.location.city}</strong>.<br />
        They are expecting a response by{' '}
        <strong>
          {dayjs()
            .add(1, 'day')
            .format('dddd, MMM M @ h:mm a')}
        </strong>.
      </EmailRow>
      <EmptySpace height={10} />
      <EmailRow>
        <strong>Email</strong>
        <br />
        {data.email}
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow>
        <strong>Size of company</strong>
        <br />
        {data.companySize || (
          <span style={{ color: '#8e8e8e' }}>Not provided</span>
        )}
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow>
        <strong>The project type {data.name} needs</strong>
        <br />
        {data.project || <span style={{ color: '#8e8e8e' }}>Not provided</span>}
      </EmailRow>
      <EmptySpace height={16} />
      <EmailRow>
        <strong>Project details</strong>
        <br />
        {data.details || <span style={{ color: '#8e8e8e' }}>Not provided</span>}
      </EmailRow>
    </Body>
  </Layout>
);
