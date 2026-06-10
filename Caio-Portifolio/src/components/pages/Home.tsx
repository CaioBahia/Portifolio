import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useTranslation } from '../../i18n/useTranslation';
import { useThemeColors } from '../shared/hooks';

const Home: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { isDark, gradientColor, dotTexture } = useThemeColors();
  const bgBackground = isDark ? '#0B1228' : '#F5F9FC';
  const bgTexture = dotTexture;

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: bgBackground,
        backgroundImage: bgTexture,
        backgroundSize: '24px 24px, 36px 36px',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'normal',
        pt: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            animation: 'slideUp 0.8s ease-out',
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              fontWeight: 600,
              mb: 1,
              background: gradientColor,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.hero.greeting}
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 800,
              mb: 2,
              background: gradientColor,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
          >
            {t.hero.name}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 600,
              mb: 2,
              color: 'text.secondary',
            }}
          >
            {t.hero.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            {t.hero.description}
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mb: 8,
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="#projects"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                background: gradientColor,
                boxShadow: isDark ? '0 4px 20px rgba(30, 64, 175, 0.3)' : '0 4px 20px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: isDark ? '0 6px 30px rgba(30, 64, 175, 0.4)' : '0 6px 30px rgba(16, 185, 129, 0.4)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t.hero.cta1}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderWidth: 2,
                  background: isDark ? 'rgba(30, 64, 175, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t.hero.cta2}
            </Button>
          </Box>

          {/* Scroll Indicator */}
          <Box
            sx={{
              animation: 'bounce 2s infinite',
              mt: 4,
            }}
          >
            <ExpandMore sx={{ fontSize: 40, opacity: 0.7 }} />
          </Box>
        </Box>
      </Container>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
