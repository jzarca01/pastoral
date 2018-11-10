import React from 'react';
import { Table, TBody, TD, TR } from 'oy-vey';

import EmptySpace from './EmptySpace';

const Header = props => (
  <Table width="100%" height="31.35" color={props.color}>
    <TBody>
      <TR>
        <TD>
          <Table width="100%">
            <TBody>
              <TR>
                <TD>
                  <img
                    src="https://res.cloudinary.com/narative/image/upload/v1541874749/narative-n-logo.png"
                    width="28px"
                    height="38px"
                    alt="Narative logo"
                  />
                </TD>
              </TR>
            </TBody>
          </Table>
        </TD>
      </TR>
    </TBody>
  </Table>
);

export default Header;
