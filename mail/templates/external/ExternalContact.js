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
        I’m Mack Mansouri, co-founder and head of growth here at Narative.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        Thanks for sending over more info about your project. I’ll review
        everything and be in touch within the next business day.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        Before we talk more, I wanted to let you know a bit about what to expect
        from working with us. A typical engagement with Narative lasts between
        14 to 20 weeks and starts at around $350,000 USD.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        During that time, we get to know yourself, your team and your product to
        fully understand every problem and opportunity. Then we get to work
        creating high-quality products designed to deliver a significant ROI.
      </EmailRow>
      <EmptySpace height={20} />
      <EmailRow width={EMAIL_WIDTH}>
        I’ve attached a short deck that explains more about our values,
        experience and areas of expertise. If you'd like to add anything more
        before our first call, please don't hesitate to reply to this message.
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
