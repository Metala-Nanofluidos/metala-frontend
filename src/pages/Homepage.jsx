import React from "react";
import styled from "styled-components";
import Logo from "../assets/Metala-branco.png";
import VantaBackground from "../components/Cells";
import LanguageSelector from "../components/Language";
import { Grommet, Box, Image, Button, ResponsiveContext, DropButton } from "grommet";
import { useTranslation } from "react-i18next";
import { ColorBox1, ColorBox2, ColorBox3 } from "../components/Boxes";

const Homepage = () => {
  const { t } = useTranslation();
  const size = React.useContext(ResponsiveContext); // Captura o tamanho da viewport

  return (
    <Grommet theme={customTheme}>
      <Container>
        <VantaBackgroundContainer>
          <VantaBackground />
        </VantaBackgroundContainer>
        <StyledHeader>
          <Box direction="row" align="center" justify="between" fill="horizontal">
            <Box direction="row" align="center" gap="medium">
              <Image src={Logo} width="150px" height="100px" />
            </Box>
            {size === 'small' ? (
              <DropButton
                label="Menu"
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <Box pad="medium" background="light-2">
                    <StyledButton label={t('header.home')} href="#" />
                    <StyledButton label={t('header.about_us')} href="#" />
                    <StyledButton label={t('header.our_technology')} href="#" />
                    <StyledButton label={t('header.contact')} href="#" />
                    <LanguageSelector />
                  </Box>
                }
              />
            ) : (
              <Box direction="row" gap="small" justify="end" fill="horizontal">
                <StyledButton label={t('header.home')} href="#" />
                <StyledButton label={t('header.about_us')} href="#" />
                <StyledButton label={t('header.our_technology')} href="#" />
                <StyledButton label={t('header.contact')} href="#" />
                <LanguageSelector />
              </Box>
            )}
          </Box>
        </StyledHeader>
        <Content>
          <ColorBox1 />
          <ColorBox2 />
          <ColorBox3 />
        </Content>
      </Container>
    </Grommet>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const VantaBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  pointer-events: none;
`;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  color: white;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 0px;
`;

const StyledButton = styled(Button)`
  border: 1px solid white;
  color: white;
  background: transparent;
  white-space: nowrap; /* Evita quebra de linha nos botões */
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Content = styled.div`
  z-index: 2;
  margin-top: 150px;
  position: relative;
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
    breakpoints: {
      small: {
        value: 900, // small definido para 1000px
      },
      medium: {
        value: 1536,
      },
      large: {
        value: 2000,
      },
    },
  },
};
