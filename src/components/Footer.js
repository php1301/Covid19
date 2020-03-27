import React from 'react';
import { Header, Icon, Menu } from 'semantic-ui-react';
const Footer = () => {
  return (
    <div>
      <Header
        textAlign='center'
        color='green'
        icon
        style={{ 'margin-top': '50px' }}>
        <Menu.Item href='https://github.com/linhtn3103' target='_blank'>
          <Icon link name='github' color='green' />
        </Menu.Item>

        <Header.Subheader>Make with love by Linh Tran !!</Header.Subheader>
      </Header>
    </div>
  );
};
export default Footer;
