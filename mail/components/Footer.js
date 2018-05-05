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

  const tdStyles = {
    backgroundColor: '#fff',
    fontFamily:
      '"futura-pt","Roboto", Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif',
    padding: '0 30px 35px 35px',
    textAlign: 'center',
    lineHeight: '16px'
  };

  const innerStyles = {
    borderTop: '4px solid #111216',
    color: '#111216',
    fontSize: '12px',
    textAlign: 'center',
    padding: '20px 30px 35px 35px'
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
      align="center"
      className="full"
    >
      <TBody>
        <TR>
          <TD>
            <Table
              width="100%"
              className="widthFull-"
              className="body"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={tableStyle}
              width="600"
            >
              <TBody>
                <TR>
                  <TD>
                    <TD style={tdStyles} valign="top">
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
                        width="100%"
                      >
                        <TBody>
                          <TR>
                            <TD style={innerStyles}>
                              <div>
                                Sent by{' '}
                                <a
                                  style={{
                                    color: '#8e8e8e'
                                  }}
                                  target="_blank"
                                  href="https://narative.co"
                                >
                                  Narative
                                </a>{' '}
                                · 4141 Avenue Papineau, Montréal, QC H2K 4K2
                              </div>
                              <Table
                                width="100%"
                                height="60"
                                color={props.color}
                              >
                                <TBody>
                                  <TR>
                                    <TD>
                                      <Table width="100%">
                                        <TBody>
                                          <TR>
                                            <TD
                                              align="center"
                                              style={{
                                                color: props.color
                                              }}
                                            >
                                              <img
                                                src="http://res.cloudinary.com/narative/image/upload/v1525489184/narative-logo-black.jpg"
                                                width="100px"
                                                alt="Narative logo"
                                              />
                                            </TD>
                                          </TR>
                                        </TBody>
                                      </Table>
                                    </TD>
                                  </TR>
                                </TBody>
                              </Table>
                            </TD>
                          </TR>
                        </TBody>
                      </Table>
                    </TD>
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
