import React from 'react';

export default props => {
  const rowStyles = {
    lineHeight: '1.6',
    margin: props.margin || '0',
    fontSize: props.fontSize || '18px',
    color: props.color || '#111216',
    fontWeight: props.fontWeight || '300',
    width: props.width || '100%',
    wordBreak: 'break-word',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%'
  };

  return (
    <p width={props.width || '100%'} style={rowStyles} className="email-row">
      {props.children}
    </p>
  );
};
