import React from 'react';
import { Box, DropButton, Image } from 'grommet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import BrasilFlag from '../assets/flags/brasil.png';
import USFlag from '../assets/flags/estados-unidos.png';
import SpainFlag from '../assets/flags/espanha.png';
import FranceFlag from '../assets/flags/franca.png';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  const languages = [
    { label: 'Português', value: 'pt', flag: BrasilFlag },
    { label: 'English', value: 'en', flag: USFlag },
    { label: 'Español', value: 'es', flag: SpainFlag },
    { label: 'Français', value: 'fr', flag: FranceFlag },
  ];

  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const selectedLanguage = languages.find((lang) => lang.value === language);

  return (
    <StyledDropButton 
      label={<Image src={selectedLanguage?.flag} alt={selectedLanguage?.label} width="24px" />}
      dropContent={
        <StyledDropContent style={{ overflow:'hidden'}}>
          {languages.map((lang) => (
            <StyledLanguageOption
              key={lang.value}
              onClick={() => handleLanguageChange(lang.value)}
            >
              <Image src={lang.flag} alt={lang.label} width="24px" />
            </StyledLanguageOption>
          ))}
        </StyledDropContent>
      }
    />
  );
}

export default LanguageSelector;

const StyledDropButton = styled(DropButton)`
  border: 1px solid white;
  background: transparent;
  padding: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledDropContent = styled(Box)`
  padding: 5px;
  border-radius: 8px;
  box-shadow: none;
  overflow: hidden;
`;

const StyledLanguageOption = styled(Box)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
