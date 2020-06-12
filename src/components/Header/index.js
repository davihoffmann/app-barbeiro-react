import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import defaultiImageUser from '~/assets/no-user-image.png';
import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Davi Hoffmann</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={defaultiImageUser} alt="Davi Hoffmann" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
