import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { Code, Palette, Bolt } from '@mui/icons-material';
import { useTranslation } from '../../i18n/useTranslation';
import FeatureCard from '../shared/ui/FeatureCard';

const About: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === 'dark';

  const gradientColor = isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)';

  const features = [
    {
      icon: <Code />,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc,
    },
    {
      icon: <Palette />,
      title: t.about.uiux,
      description: t.about.uiuxDesc,
    },
    {
      icon: <Bolt />,
      title: t.about.performance,
      description: t.about.performanceDesc,
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        backgroundColor: isDark ? '#0F0F1E' : '#F9FAFB',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 2,
              background: gradientColor,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.about.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {t.about.subtitle}
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Box>

        {/* Bio Section */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            background: isDark
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
            {t.about.journey}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
            {t.about.journeyText}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {t.about.journeyText2}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
