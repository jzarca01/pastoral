import React from 'react';
import { Table, TBody, TD, TR } from 'oy-vey';

import EmptySpace from './EmptySpace';

const Header = props => (
  <Table width="100%" height="60" color={props.color}>
    <TBody>
      <TR>
        <TD>
          <Table width="100%">
            <TBody>
              <TR>
                <TD
                  align="center"
                  style={{ color: props.color, padding: '30px 30px 35px 35px' }}
                >
                  <img
                    src="http://res.cloudinary.com/narative/image/upload/v1525489184/narative-logo-black.jpg"
                    width="160px"
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
