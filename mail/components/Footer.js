import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';

import EmptySpace from './EmptySpace';

const Footer = props => {
  const innerStyles = {
    padding: '0 18px 35px 18px'
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
        background: '#fff',
        minWidth: '100%',
        maxWidth: '600px'
      }}
      width="100%"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      className="full"
    >
      <TBody>
        <TR>
          <TD valign="top">
            <Table
              style={{
                WebkitTextSizeAdjust: '100%',
                msTextSizeAdjust: '100%',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
                borderCollapse: 'collapse',
                margin: '0px auto',
                minWidth: '100%'
              }}
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <TBody>
                <TR>
                  <TD style={innerStyles} className="rowTextContent">
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
                          width="11"
                          height="15"
                          alt="Facebook logo"
                          style={{ maxWidth: '10px' }}
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
                          width="11"
                          height="14"
                          alt="Twitter logo"
                          style={{ maxWidth: '20px' }}
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
                          width="11"
                          height="15"
                          alt="Instagram logo"
                          style={{ maxWidth: '20px' }}
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
                          width="11"
                          height="15"
                          alt="LinkedIn logo"
                          style={{ maxWidth: '20px' }}
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
                          width="11"
                          height="13"
                          alt="Medium logo"
                          style={{ maxWidth: '20px' }}
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
