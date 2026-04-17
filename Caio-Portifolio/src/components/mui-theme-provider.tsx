import React, { useEffect, useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme, darkTheme } from '../theme'
import { ThemeProviderContext } from './theme-context'

type ThemeType = 'light' | 'dark' | 'system'

type CustomThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: ThemeType
  storageKey?: string
}

export function MuiThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: CustomThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(
    () => (localStorage.getItem(storageKey) || defaultTheme) as ThemeType
  )

  const resolvedTheme = useMemo<'light' | 'dark'>(() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return theme
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  const value = {
    theme,
    setTheme: (t: ThemeType) => {
      localStorage.setItem(storageKey, t)
      setTheme(t)
    },
  }

  const muiTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  )
}
