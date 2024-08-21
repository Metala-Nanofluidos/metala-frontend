import React from "react";
import { Box, Text, Heading, Image, Avatar, Card } from "grommet";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Metala-branco.png";
import Diana from '../assets/partners/diana.png';
import Fatima from '../assets/partners/fatima.png';
import Henry from '../assets/partners/henry.png';
import Lais from '../assets/partners/lais.png';
import Leonardo from '../assets/partners/leonardo.png';
import Luis from '../assets/partners/luis.png';
import Paulo from '../assets/partners/paulo.png';
import Raquel from '../assets/partners/raquel.png';
import Sonia from '../assets/partners/sonia.png';
import Suelia from '../assets/partners/suelia.png';
import BioMinas from '../assets/partners/biominas.png';
import DonaHelena from '../assets/partners/donahelena.jpg';
import IfRond from '../assets/partners/ifrond.png';
import Uern from '../assets/partners/uern.png';
import PucGoias from '../assets/partners/pucgoias.png';
import AutonomaOccidente from '../assets/partners/autonomaoccidente.png';


const ColorBox1 = () => (
  <StyledBox background="white">
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
  <StyledBox background="white">
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
  <StyledBox>
    <StyledContainer>
      <StyledHeading>Parceiros</StyledHeading>
    </StyledContainer>
    <ContainerCards>
      <StyledCard>
        <StyledAvatar src={Diana}></StyledAvatar>
        <StyledName>Eng. Dra. Diana Montilla</StyledName>
        <StyledText>Univ. Autônoma da Colômbia</StyledText>  
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Fatima}></StyledAvatar>
        <StyledName>Dra. Fátima Mrué</StyledName>
        <StyledText> Hospital das Clínicas/UFG</StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Henry}></StyledAvatar>
        <StyledName>Técnico Henry Santana</StyledName>
        <StyledText>Biologia - UDF</StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Lais}></StyledAvatar>
        <StyledName>Dra. Lais Vaz</StyledName>
        <StyledText> UnB </StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Leonardo}></StyledAvatar>
        <StyledName>Dr. Leonardo Paterno</StyledName>
        <StyledText> Inst. de química - UnB </StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Luis}></StyledAvatar>
        <StyledName>Dr. Luis Sérgio Grillo</StyledName>
        <StyledText>Hospital Santa Rita de Cassia/ES</StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Paulo}></StyledAvatar>
        <StyledName>Eng. Dr. Paulo Roberto</StyledName>
        <StyledText>Inst. Fed. de Rondônia</StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Raquel}></StyledAvatar>
        <StyledName>Dra. Raquel Almeida</StyledName>
        <StyledText>UnB</StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Sonia}></StyledAvatar>
        <StyledName>Dra. Sonia Báo</StyledName>
        <StyledText>Lab. de Microscopia e Microanálsie - UnB</StyledText>
      </StyledCard>
      <StyledCard>
        <StyledAvatar src={Suelia}></StyledAvatar>
        <StyledName>Dra. Suelia S. R. Fleury Rosa</StyledName>
        <StyledText>Cornell Engineering / BioEngLab</StyledText>
      </StyledCard>
    </ContainerCards>
    <ContainerPartners>
      <StyledIcon src={DonaHelena}></StyledIcon>
      <StyledIcon src={BioMinas}></StyledIcon>
      <StyledIcon src={IfRond}></StyledIcon>
      <StyledIcon></StyledIcon>
      <StyledIcon></StyledIcon>
      <StyledIcon></StyledIcon>
      <StyledIcon></StyledIcon>
    </ContainerPartners>
  </StyledBox>
);

export { ColorBox1, ColorBox2, ColorBox3 };

const ContainerPartners = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Image)`
  width: 50px;
  height: 50px;
`;

const StyledBox = styled(Box)`
  display: flex;
  margin-top: 40px;
  padding: 20px;
  color: black;
  font-size: 2rem;
  border-radius: 10px;
  box-shadow: 
  inset 0 1px 3px rgba(0, 0, 0, 0.12), 
  0 1px 3px rgba(0, 0, 0, 0.24);
  background-color: white;
`;
const StyledHeading = styled(Heading)`
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 900;
`;

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledAvatar = styled(Avatar)`
  background-color: white;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const ContainerCards = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 150px;
  height: 200px;
  box-shadow: 
  inset 0 1px 3px rgba(0, 0, 0, 0.12), 
  0 1px 3px rgba(0, 0, 0, 0.24);
  margin: 10px;
`;

const StyledText = styled(Text)`
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`;

const StyledName = styled(Text)`
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
`;