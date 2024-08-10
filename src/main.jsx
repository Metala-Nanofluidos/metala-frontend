import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import ResetStyle from './styles/ResetStyle.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </I18nextProvider>
  </StrictMode>,
);
