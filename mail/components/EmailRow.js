import React from 'react';

export default props => {
  const rowStyles = {
    lineHeight: '1.6',
    margin: props.margin || '0',
    fontSize: props.fontSize || '18px',
    color: props.color || '#7A8085',
    fontWeight: props.fontWeight || 'regular',
    width: props.width || '100%'
  };

  return (
    <div width={props.width || '100%'} style={rowStyles}>
      {props.children}
    </div>
  );
};
