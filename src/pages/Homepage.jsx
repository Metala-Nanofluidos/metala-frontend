import React from "react";
import styled from "styled-components";
import Logo from "../assets/Metala-branco.png";
import VantaBackground from "../components/Cells";
import { Grommet, Page, Box, Image, Button } from "grommet";

const Homepage = () => {
  return (
    <Grommet theme={customTheme}>
      <Container>
        <VantaBackgroundContainer>
          <VantaBackground />
          <StyledHeader>
            <Box direction="row" align="center" justify="between" fill="horizontal">
              <Box direction="row" align="center" gap="medium">
                <Image src={Logo} width="150px" height="100px" />
              </Box>
              <Box direction="row" gap="medium">
                <StyledButton label="Home" href="#" />
                <StyledButton label="About Us" href="#" />
                <StyledButton label="Our Technology" href="#" />
                <StyledButton label="Contact" href="#" />
              </Box>
            </Box>
          </StyledHeader>
        </VantaBackgroundContainer>
        <Content>
          {/* Aqui vai o conteúdo principal da página */}
          <h1>Bem-vindo à nossa página</h1>
        </Content>
      </Container>
    </Grommet>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const VantaBackgroundContainer = styled.div`
  position: relative;
  height: 300px; /* Altura total do header com a animação */
  width: 100%;
`;

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px; /* Ajuste conforme necessário */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  color: white;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const StyledButton = styled(Button)`
  border: 1px solid white; /* Borda branca */
  color: white; /* Texto branco */
  background: transparent;
  &:hover {
    background: rgba(255, 255, 255, 0.2); /* Fundo levemente branco ao passar o mouse */
  }
`;

const Content = styled.div`
  padding: 20px;
  color: white;
  text-align: center;
  flex: 1;
`;

const customTheme = {
  global: {
    colors: {
      brand: '#00739D',
      control: {
        light: 'black',
        dark: 'white',
      },
    },
    font: {
      family: 'Arial',
      size: '18px',
      height: '20px',
    },
  },
};
