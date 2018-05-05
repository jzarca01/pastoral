import React from 'react';
import { Table, TBody, TD, TR } from 'oy-vey';

import EmptySpace from './EmptySpace';

const Header = props => (
  <Table width="100%" height="100" color={props.color}>
    <TBody>
      <TR>
        <TD>
          <Table width="100%">
            <TBody>
              <TR>
                <TD style={{ color: props.color, fontFamily: 'Arial' }}>
                  <img
                    src="https://www.narative.co/images/logo/narative-logo-white.png"
                    width="120px"
                    alt="Narative logo"
                  />
                </TD>
              </TR>
            </TBody>
          </Table>
          <EmptySpace height={30} />
        </TD>
      </TR>
    </TBody>
  </Table>
);

export default Header;
