import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#10B981', // Green
      light: '#6EE7B7',
      dark: '#059669',
      contrastText: '#fff',
    },
    secondary: {
      main: '#34D399', // Lighter green
      light: '#6EE7B7',
      dark: '#10B981',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF', // Branco puro
      paper: '#FFFFFF', // Branco puro
    },
    divider: '#D1FAE5', // Light green
    text: {
      primary: '#111827',
      secondary: '#4B5563',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Oxygen", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B5CF6', // Purple
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#fff',
    },
    secondary: {
      main: '#A855F7', // Lighter purple
      light: '#C084FC',
      dark: '#9333EA',
      contrastText: '#fff',
    },
    background: {
      default: '#000000', // Preto puro
      paper: '#000000', // Preto puro
    },
    divider: '#4C1D95', // Deep purple
    text: {
      primary: '#FFFFFF',
      secondary: '#E9D5FF', // Light purple
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Oxygen", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
})
