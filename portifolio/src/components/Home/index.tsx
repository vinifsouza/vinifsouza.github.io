import { ColLeft, ColRight, Container, Name, Salute } from './styled';

import React from 'react';
import { ScrollToIcon } from './../../shared/ScrollToIcon/index';

export default function Home() {
  return (
    <Container id="home">
      <ColLeft>
        <Salute>
          <div>Olá, eu sou</div>
          <Name>Vinícius Souza</Name>
          desenvoledor back-end
        </Salute>
      </ColLeft>

      <ColRight>
        <img src="/assets/images/profile-photo.png" alt="My avatar" />
      </ColRight>

      <ScrollToIcon target="about-me" />
    </Container>
  );
}
