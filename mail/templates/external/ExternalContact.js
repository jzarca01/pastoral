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
      <EmailRow width="100%" fontWeight="300">
        Hi, {data.name && data.name.split(' ')[0]}
      </EmailRow>
      <EmptySpace height={30} />
      <EmailRow width="463px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        placerat ligula justo, non suscipit nisi mollis vel. Aliquam vestibulum
        magna non accumsan aliquet.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width="463px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        placerat ligula justo, non suscipit nisi mollis vel. Aliquam vestibulum
        magna non accumsan aliquet.
      </EmailRow>
    </Body>
  </Layout>
);
