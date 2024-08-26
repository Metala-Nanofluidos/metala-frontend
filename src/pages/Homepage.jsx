import React from "react";
import styled from "styled-components";
import Logo from "../assets/Metala-branco.png";
import LanguageSelector from "../components/Language";
import { Grommet, Box, Image, Button, ResponsiveContext, DropButton } from "grommet";
import { useTranslation } from "react-i18next";
import { ColorBox1, ColorBox2, ColorBox3, ColorBox4 } from "../components/Boxes";

const Homepage = () => {
  const { t } = useTranslation();
  const size = React.useContext(ResponsiveContext);

  return (
    <Grommet theme={customTheme}>
      <Container>
        <StyledHeader>
          <Box direction="row" align="center" justify="between" fill="horizontal">
            <Box direction="row" align="center" gap="medium">
              <Image src={Logo} width="150px" height="100px" />
            </Box>
            {size === 'small' ? (
              <StyledDropButton
                label="Menu"
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <StyledDropContent>
                    <StyledButton label={t('header.home')} href="#" />
                    <StyledButton label={t('header.about_us')} href="#" />
                    <StyledButton label={t('header.our_technology')} href="#" />
                    <StyledButton label={t('header.contact')} href="#" />
                    <LanguageSelector />
                  </StyledDropContent>
                }
              />
            ) : (
              <Box direction="row" gap="small" justify="end"  align="center" fill="horizontal">
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
          <ColorBox2 />
          <ColorBox1 />
          <ColorBox3 />
          <ColorBox4/>
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
  width: 100vw;
  overflow-x: hidden;
  background-color: #9d3e90;
  padding: 10px;
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
  white-space: nowrap; 
  margin: 5px 0;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledDropButton = styled(DropButton)`
  border: 1px solid white;
  color: white;
  background: transparent;
  white-space: nowrap;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledDropContent = styled(Box)`
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 8px; 
`;

const Content = styled.div`
  z-index: 2;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80vw;
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
        value: 900,
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
