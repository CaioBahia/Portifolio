import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  alpha,
  useTheme,
  Select,
  MenuItem,
} from '@mui/material';
import { GitHub, LinkedIn, Mail, Brightness4, Brightness7, Language } from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../shared/hooks/use-theme';
import { useTranslation } from '../../i18n/useTranslation';
import { LanguageContext } from '../../i18n/LanguageContext';
import { useContext } from 'react';

const Header: React.FC = () => {
  const { theme: customTheme, setTheme } = useCustomTheme();
  const { language, setLanguage } = useContext(LanguageContext) || { language: 'pt', setLanguage: () => {} };
  const { t } = useTranslation();
  const muiTheme = useTheme();

  const isDark =
    customTheme === 'dark' || (customTheme === 'system' && muiTheme.palette.mode === 'dark');

  const gradientColor = isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)';
  const headerBg = isDark
    ? 'rgba(15, 15, 30, 0.85)'
    : 'rgba(249, 250, 251, 0.85)';

  return (
    <AppBar
      elevation={0}
      sx={{
        background: headerBg,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
        transition: 'all 0.3s ease',
        color: isDark ? '#ffffff' : '#1a1a1a',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1, justifyContent: 'space-between', color: 'inherit' }}>
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: gradientColor,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            Caio Bahia
          </Typography>

          {/* Navigation */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {[
              { label: t.navigation.home, href: '#home' },
              { label: t.navigation.about, href: '#about' },
              { label: t.navigation.skills, href: '#stacks' },
              { label: t.navigation.projects, href: '#projects' },
              { label: t.navigation.contact, href: '#contact' },
            ].map((item) => (
              <Button
                key={item.href}
                href={item.href}
                sx={{
                  color: 'inherit',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 2,
                    background: gradientColor,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 0.5, ml: 2 }}>
              <IconButton size="small" href="https://github.com/caiobahia" target="_blank" rel="noopener">
                <GitHub sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton size="small" href="https://linkedin.com/in/caiobahia" target="_blank" rel="noopener">
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton size="small" href="mailto:caiobahia.dev@gmail.com">
                <Mail sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>

            {/* Language Selector */}
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
              size="small"
              startAdornment={<Language sx={{ mr: 1, fontSize: 20 }} />}
              sx={{
                ml: 1,
                color: isDark ? '#ffffff' : '#1a1a1a',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: muiTheme.palette.primary.main,
                },
              }}
            >
              <MenuItem value="pt">{t.header.portuguese}</MenuItem>
              <MenuItem value="en">{t.header.english}</MenuItem>
            </Select>

            {/* Theme Toggle */}
            <IconButton
              onClick={() => setTheme(customTheme === 'dark' ? 'light' : 'dark')}
              sx={{
                ml: 1,
                color: 'inherit',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'rotate(20deg)' },
              }}
            >
              {isDark ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
