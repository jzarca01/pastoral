import React from 'react';
import { Table, TBody, TR, TD, A } from 'oy-vey';

import EmptySpace from './EmptySpace';

const Footer = props => {
  const tableStyle = {
    maxWidth: '600px',
    width: '530px',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    borderCollapse: 'collapse',
    margin: '0px auto'
  };

  const innerStyles = {
    padding: '0 30px 35px 35px'
  };

  return (
    <Table
      width="100%"
      style={{
        WebkitTextSizeAdjust: '100%',
        msTextSizeAdjust: '100%',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        borderCollapse: 'collapse',
        margin: '0px auto',
        background: '#fff'
      }}
      border="0"
      cellPadding="0"
      cellSpacing="0"
      className="full"
    >
      <TBody>
        <TR>
          <TD valign="top">
            <Table
              className="widthFull-"
              style={{
                WebkitTextSizeAdjust: '100%',
                msTextSizeAdjust: '100%',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
                borderCollapse: 'collapse',
                margin: '0px auto'
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
              width="600"
            >
              <TBody>
                <TR>
                  <TD style={innerStyles}>
                    <div
                      style={{ marginRight: '35px', display: 'inline-block' }}
                    >
                      <a
                        href="https://www.facebook.com/narative.co/"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="https://res.cloudinary.com/narative/image/upload/v1541875938/Facebook.png"
                          height="15px"
                          alt="Narative logo"
                        />
                      </a>
                    </div>
                    <div
                      style={{ marginRight: '35px', display: 'inline-block' }}
                    >
                      <a
                        href="https://twitter.com/narative_co"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="https://res.cloudinary.com/narative/image/upload/v1541875938/Twitter.png"
                          height="14px"
                          alt="Narative logo"
                        />
                      </a>
                    </div>
                    <div
                      style={{ marginRight: '35px', display: 'inline-block' }}
                    >
                      <a
                        href="https://www.instagram.com/narative.co/"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="https://res.cloudinary.com/narative/image/upload/v1541875938/Instagram.png"
                          height="15px"
                          alt="Narative logo"
                        />
                      </a>
                    </div>
                    <div
                      style={{ marginRight: '35px', display: 'inline-block' }}
                    >
                      <a
                        href="https://www.linkedin.com/company/narative/"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="https://res.cloudinary.com/narative/image/upload/v1541875938/LinkedIn.png"
                          height="15px"
                          alt="Narative logo"
                        />
                      </a>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                      <a
                        href="https://medium.com/narative"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="https://res.cloudinary.com/narative/image/upload/v1541875938/Medium.png"
                          height="13px"
                          alt="Narative logo"
                        />
                      </a>
                    </div>
                    <EmptySpace height={20} />
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};

export default Footer;
