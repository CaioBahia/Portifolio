import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  useTheme,
  Select,
  MenuItem,
} from '@mui/material';
import { GitHub, LinkedIn, Mail, Brightness4, Brightness7, Language } from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../shared/hooks/use-theme';
import { useTranslation } from '../../i18n/useTranslation';
import { LanguageContext } from '../../i18n/LanguageContext';

const Header: React.FC = () => {
  const { theme: customTheme, setTheme } = useCustomTheme();
  const { language, setLanguage } = useContext(LanguageContext) || { language: 'pt', setLanguage: () => {} };
  const { t } = useTranslation();
  const muiTheme = useTheme();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        background: headerBg,
        backdropFilter: 'blur(12px)',
        boxShadow: isDark
          ? '0 10px 30px rgba(0, 0, 0, 0.12)'
          : '0 10px 30px rgba(15, 23, 42, 0.08)',
        transition: 'transform 0.25s ease, background 0.3s ease, box-shadow 0.3s ease',
        transform: showHeader ? 'translateY(0)' : 'translateY(-120%)',
        color: isDark ? '#ffffff' : '#1a1a1a',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            py: 1,
            justifyContent: 'space-between',
            color: 'inherit',
          }}
        >
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
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {[
              { label: t.navigation.home, href: 'home' },
              { label: t.navigation.about, href: 'about' },
              { label: t.navigation.skills, href: 'stacks' },
              { label: t.navigation.projects, href: 'projects' },
              { label: t.navigation.contact, href: 'contact' },
            ].map((item) => (
              <Button
                key={item.href}
                aria-label={item.label}
                onClick={() => {
                  const element = document.getElementById(item.href);

                  if (element) {
                    const offset = 40 ;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
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
                    transition: 'all 0.3s ease',
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
            <Box sx={{ display: 'flex', gap: 0.5, ml: { xs: 0, md: 2 }, alignItems: 'center', flexWrap: 'wrap' }}>
              <IconButton
                size="small"
                href="https://github.com/caiobahia"
                target="_blank"
                rel="noopener"
                aria-label="Visit GitHub profile"
              >
                <GitHub sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                size="small"
                href="https://linkedin.com/in/caiobahia"
                target="_blank"
                rel="noopener"
                aria-label="Visit LinkedIn profile"
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                size="small"
                href="mailto:caiobahia.dev@gmail.com"
                aria-label="Send email"
              >
                <Mail sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>

            {/* Language Selector */}
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
              size="small"
              aria-label="Select language"
              startAdornment={<Language sx={{ mr: 1, fontSize: 20 }} />}
              sx={{
                minWidth: { xs: 80, md: 140 },
                ml: { xs: 0, md: 1 },
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
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-pressed={isDark}
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
