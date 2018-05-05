/**
 * EmptySpace:
 * Table-based way to add vertical space. Uses line-height.
 */

import React from 'react';
import { Table, TBody, TR, TD } from 'oy-vey';

const EmptySpace = props => {
  const style = {
    lineHeight: `${props.height}px`,
    fontSize: '1px',
    msoLineHeightRule: 'exactly',
  };

  return (
    <Table className="row" width="100%">
      <TR>
        <TD
          height={`${props.height}px`}
          style={style}
          dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
        />
      </TR>
    </Table>
  );
};

EmptySpace.defaultProps = {
  height: '16',
};

export default EmptySpace;
