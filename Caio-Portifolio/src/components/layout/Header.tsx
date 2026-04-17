import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  useScrollTrigger,
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
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const isDark =
    customTheme === 'dark' || (customTheme === 'system' && muiTheme.palette.mode === 'dark');

  const gradientColor = isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)';

  return (
    <AppBar
      elevation={trigger ? 8 : 0}
      sx={{
        background: trigger
          ? gradientColor
          : muiTheme.palette.background.paper,
        backdropFilter: 'blur(10px)',
        backgroundColor: alpha(muiTheme.palette.background.paper, 0.8),
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1, justifyContent: 'space-between' }}>
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
            Caio
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
              <IconButton size="small" href="https://github.com" target="_blank" rel="noopener">
                <GitHub sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton size="small" href="https://linkedin.com" target="_blank" rel="noopener">
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton size="small" href="mailto:seu-email@exemplo.com">
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
                backgroundColor: alpha(muiTheme.palette.primary.main, 0.1),
                '& .MuiOutlinedInput-notchedOutline': {
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
