import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';
import Footer from '../components/Footer';

export default props => (
  <React.Fragment>
    <span
      className="preheader"
      style={{
        color: 'transparent',
        display: 'none',
        height: 0,
        maxHeight: 0,
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
        msoHide: 'all',
        visibility: 'hidden',
        width: 0
      }}
    >
      {props.previewText}
    </span>
    <span
      style={{
        color: 'transparent',
        display: 'none',
        height: 0,
        maxHeight: 0,
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
        msoHide: 'all',
        visibility: 'hidden',
        width: 0
      }}
    >
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </span>
    <span
      style={{
        color: 'transparent',
        display: 'none',
        height: 0,
        maxHeight: 0,
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
        msoHide: 'all',
        visibility: 'hidden',
        width: 0
      }}
    >
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </span>
    <span
      style={{
        color: 'transparent',
        display: 'none',
        height: 0,
        maxHeight: 0,
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
        msoHide: 'all',
        visibility: 'hidden',
        width: 0
      }}
    >
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </span>
    <span
      style={{
        color: 'transparent',
        display: 'none',
        height: 0,
        maxHeight: 0,
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
        msoHide: 'all',
        visibility: 'hidden',
        width: 0
      }}
    >
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </span>
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
        maxWidth: '600px'
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
              style={{
                WebkitTextSizeAdjust: '100%',
                msTextSizeAdjust: '100%',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
                borderCollapse: 'collapse',
                margin: '0px auto',
                maxWidth: '600px'
              }}
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <TBody>
                <TR>
                  <TD align="left" width="100%">
                    {props.children}
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>
        </TR>
        <Footer />
      </TBody>
    </Table>
  </React.Fragment>
);
