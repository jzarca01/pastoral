import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';

import EmptySpace from './EmptySpace';
import Header from './Header';

export default props => {
  const textStyle = {
    backgroundColor: '#fff',
    fontFamily: 'futura-pt,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: '300',
    color: '#111216',
    fontSize: '18px',
    padding: '20px 18px 20px 18px',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%'
  };

  return (
    <Table
      width="100%"
      className="body"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      style={{
        WebkitTextSizeAdjust: '100%',
        msTextSizeAdjust: '100%',
        maxWidth: '600px'
      }}
      width="100%"
    >
      <TBody>
        <TR>
          <TD valign="top" className="rowContent" style={textStyle}>
            <EmptySpace height={50} />
            <Header />
            <EmptySpace height={60} />
            {props.children}
            <EmptySpace height={70} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};
