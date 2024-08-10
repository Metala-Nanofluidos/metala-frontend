import React from 'react';
import { Box, DropButton, Image } from 'grommet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';


function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  const languages = [
    { label: 'English', value: 'en', flag: '../assets/flags/us.svg' },
    { label: 'Português', value: 'pt', flag: '../assets/flags/br.svg' },
    { label: 'Español', value: 'es', flag: '../assets/flags/es.svg' },
    { label: 'Français', value: 'fr', flag: '../assets/flags/fr.svg' },
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
        <Box pad="small" background="light-2">
          {languages.map((lang) => (
            <StyledLanguageOption
              key={lang.value}
              onClick={() => handleLanguageChange(lang.value)}
              direction="row"
              align="center"
              gap="small"
            >
              <Image src={lang.flag} alt={lang.label} width="24px" />
              <span>{lang.label}</span>
            </StyledLanguageOption>
          ))}
        </Box>
      }
    />
  );
}

export default LanguageSelector;

const StyledDropButton = styled(DropButton)`
  border: 1px solid white;
  color: white;
  background: transparent;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const StyledLanguageOption = styled(Box)`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
