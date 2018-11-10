import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';

import EmptySpace from './EmptySpace';
import Footer from './Footer';
import Header from './Header';

export default props => {
  const textStyle = {
    backgroundColor: '#fff',
    fontFamily: 'futura-pt,Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: '300',
    color: '#7A8085',
    fontSize: '18px',
    padding: '20px 35px 20px 35px'
  };

  return (
    <Table
      className="widthFull-"
      width="100%"
      className="body"
      cellPadding="0"
      cellSpacing="0"
      border="0"
    >
      <TBody>
        <TR>
          <TD valign="top" style={textStyle}>
            <EmptySpace height={70} />
            <Header />
            <EmptySpace height={80} />
            {props.children}
            <EmptySpace height={70} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};
