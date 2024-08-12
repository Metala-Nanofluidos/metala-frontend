import React from "react";
import { Box, Text, Heading, Image, Avatar, Card } from "grommet";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Metala-branco.png";

const ColorBox1 = () => (
  <StyledBox background="linear-gradient(45deg, #FF5733, #FFBD33)">
    <StyledContainer>
      <Heading>Equipe</Heading>
    </StyledContainer>
    <ContainerCards>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
    </ContainerCards>
  </StyledBox>
);

const ColorBox2 = () => (
  <StyledBox background="linear-gradient(45deg, #33FF57, #33FFBD)">
    <StyledContainer>
      <Heading>Nossa Teconologia</Heading>
    </StyledContainer>
    <StyledContainer>
      <Image src={Logo} width="300px" height="200px"></Image>
    </StyledContainer>
    <Text>Nanofluido de grafeno</Text>
    <Text>Sensibilização de células tumorais</Text>
    <Text>Intensificam a queima do tumor utilizando RFA, ajudando a remover o tumor por completo</Text>
    <Text>Mais seguro e barato que o MWA</Text>
    <Text>Biocompatibilidade</Text>
    <Text>Doses mínimas</Text>
  </StyledBox>
);

const ColorBox3 = () => (
  <StyledBox background="linear-gradient(45deg, #3357FF, #BD33FF)">
    <StyledContainer>
      <Heading>Parceiros</Heading>
    </StyledContainer>
    <ContainerCards>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Logo}></StyledAvatar>
      </StyledCard>
    </ContainerCards>
  </StyledBox>
);

export { ColorBox1, ColorBox2, ColorBox3 };


const StyledBox = styled(Box)`
  display: flex;
  margin-top: 40px;
  padding: 20px;
  color: white;
  font-size: 2rem;
  border-radius: 10px;
`;
const StyledHeading = styled(Heading)`
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 900;
`;

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  margin-bottom: 10px;
`;

const StyledAvatar = styled(Avatar)`
  background-color: white;
  width: 80px;
  height: 80px;
`;

const ContainerCards = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 150px;
  height: 200px;
  background-color: blue;
  margin: 10px;
`;