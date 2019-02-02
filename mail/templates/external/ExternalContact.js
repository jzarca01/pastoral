import React from 'react';
import Layout from '../../layouts/Layout';
import Body from '../../components/Body';
import EmailRow from '../../components/EmailRow';
import EmptySpace from '../../components/EmptySpace';

const EMAIL_WIDTH = '100%';

export default ({ data }) => (
  <Layout>
    <Body>
      <EmailRow width="100%">
        Hi, {data.name && data.name.split(' ')[0]}
      </EmailRow>
      <EmptySpace height={30} />
      <EmailRow width={EMAIL_WIDTH}>
        I'm Mack, co-founder and COO here at Narative. Thank you for considering
        us for your next project.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        We're reviewing everything you sent over and will reply within one
        business day. Before we talk more, I wanted to let you know a bit more
        about our approach to client partnerships.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        We believe in taking the time to get to know yourself, your team and
        your company to create products that truly help you hit the business
        goals you're aiming for. That's why we typically partner with clients
        for a period of 14–20 weeks, dedicating our entire team to each project
        to ensure its success.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        I’ve attached a short deck that explains more about what we do and how
        we can help.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        If you have any questions or more details you'd like to add, please
        don't hesitate to reply.
      </EmailRow>
      <EmptySpace height={30} />
      <EmailRow width={EMAIL_WIDTH} lineHeight={1.4}>
        <div
          style={{
            display: 'inline-block',
            marginRight: '20px'
          }}
        >
          <img
            src="https://res.cloudinary.com/narative/image/upload/v1543882110/mack-email-sig.png"
            width="41px"
            height="41px"
            alt="Narative Mack"
            style={{ maxWidth: '41px' }}
          />
        </div>
        <div style={{ display: 'inline-block' }}>
          <p
            style={{ fontWeight: '300', marginBottom: '3px' }}
            className="email-row"
          >
            Talk soon, <br />
            Mack
          </p>
        </div>
      </EmailRow>
    </Body>
  </Layout>
);
