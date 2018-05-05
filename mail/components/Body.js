import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';

import EmptySpace from './EmptySpace';

export default props => {
  const textStyle = {
    backgroundColor: '#fff',
    fontFamily:
      '"futura-pt","Roboto","Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif',
    fontSize: '18px',
    padding: '30px 30px 35px 35px'
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
            <EmptySpace height={10} />
            {props.children}
            <EmptySpace height={30} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};
