import React from 'react';
import { Table, TBody, TR, TD, A } from 'oy-vey';

import EmptySpace from './EmptySpace';

const Footer = props => {
  const tableStyle = {
    maxWidth: '640px',
    width: '640px',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    borderCollapse: 'collapse',
    margin: '0px auto',
  };

  const tdStyles = {
    backgroundColor: '#fff',
    fontFamily: '"Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif',
    padding: '0 30px 35px 35px',
    textAlign: 'center',
    lineHeight: '16px',
  };

  const innerStyles = {
    borderTop: '4px solid #111216',
    color: '#111216',
    fontSize: '12px',
    textAlign: 'center',
    paddingTop: '20px',
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
              width="640"
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
                          margin: '0px auto',
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
                                This email was sent by: Narative 123 Rue Saint
                                Laurent, Montreal, Canada
                              </div>
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
