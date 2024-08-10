import React from 'react';
import { Box, DropButton } from 'grommet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Português', value: 'pt' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
  ];

  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <StyledDropButton
      label={languages.find((lang) => lang.value === language)?.label || "Select Language"}
      dropContent={
        <Box pad="small" background="light-2">
          {languages.map((lang) => (
            <StyledLanguageOption
              key={lang.value}
              onClick={() => handleLanguageChange(lang.value)}
            >
              {lang.label}
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
