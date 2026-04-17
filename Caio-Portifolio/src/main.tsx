import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MuiThemeProvider } from './components/mui-theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </MuiThemeProvider>
  </StrictMode>,
)
