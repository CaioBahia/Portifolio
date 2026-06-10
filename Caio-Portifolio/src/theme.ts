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
      default: '#F8FBFF',
      paper: '#FFFFFF',
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
      main: '#1e40af', // Navy blue
      light: '#3b82f6',
      dark: '#1e3a8a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0284c7', // Cyan/navy complement
      light: '#0ea5e9',
      dark: '#0369a1',
      contrastText: '#fff',
    },
    background: {
      default: '#0c1929',
      paper: '#111e2e',
    },
    divider: '#082f49', // Deep navy
    text: {
      primary: '#FFFFFF',
      secondary: '#bfdbfe', // Light blue
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
