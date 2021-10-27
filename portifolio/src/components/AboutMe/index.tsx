import { AboutMeContent, ColLeft, ColRight, Container, Header } from './styled';

import React from 'react';

export default function AboutMe() {
  return (
    <Container id="about-me">
      <ColLeft>
        <div>GARGATUA</div>
      </ColLeft>

      <ColRight>
        <AboutMeContent>
          <Header>Sobre mim</Header>
          <p>
            {`
            Tenho 23 anos. Moro em Sorocaba, SP, Brasil.
            Curso o quinto semestre em Análise e Desenvolvimento de Sistemas
            e tenho estudado sobre back-end e inteligência artifilical.
            \n\n
            Trabalho atualmente com desenvolvimento e manutenção de bots para atendimento de clientes
            através de e-mail, webchat e redes sociais, como WhatsApp, Facebook Messenger e Instagram.
            Nesses projetos atuo com Node.js, TypeScript, Python, spaCy, Docker, banco de dados
            relacional (SQL e MySQL) e não relacional (Elasticsearch).
            `}
          </p>
        </AboutMeContent>
      </ColRight>
    </Container>
  );
}
