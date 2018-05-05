import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';
import Footer from '../components/Footer';

export default props => (
  <body leftmargin="0" topmargin="0" marginWidth="0" marginHeight="0">
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
              className="widthFull-"
              style={{
                WebkitTextSizeAdjust: '100%',
                msTextSizeAdjust: '100%',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
                borderCollapse: 'collapse',
                margin: '0px auto',
                maxWidth: '600px'
              }}
              width="600"
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <TBody>
                <TR>
                  <TD>{props.children}</TD>
                </TR>
              </TBody>
            </Table>
          </TD>
        </TR>
        <Footer />
        <TR>
          <TD>
            <img
              src="https://narative.co/tracker"
              height="1"
              style={{ display: 'block', height: '1px', width: '1px' }}
            />
          </TD>
        </TR>
      </TBody>
    </Table>
  </body>
);
