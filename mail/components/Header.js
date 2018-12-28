import React from 'react';
import { Table, TBody, TD, TR } from 'oy-vey';

import EmailRow from './EmailRow';

const Header = props => (
  <Table
    width="100%"
    color={props.color}
    align="left"
    width="100%"
    style={{
      WebkitTextSizeAdjust: '100%',
      msTextSizeAdjust: '100%',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      borderCollapse: 'collapse',
      margin: '0px auto',
      minWidth: '100%'
    }}
  >
    <TBody>
      <TR>
        <TD
          align="left"
          width="100%"
          style={{ textAlign: 'left', marginLeft: '0' }}
        >
          <EmailRow>
            <a
              href="https://narative.co"
              title="Narative Logo"
              target="_blank"
              style={{
                msTextSizeAdjust: '100%',
                WebkitTextSizeAdjust: '100%'
              }}
            >
              <img
                src="https://res.cloudinary.com/narative/image/upload/v1541874749/narative-n-logo.png"
                width="28px"
                height="38px"
                alt="Narative logo"
                style={{ maxWidth: '28px' }}
              />
            </a>
          </EmailRow>
        </TD>
      </TR>
    </TBody>
  </Table>
);

export default Header;
