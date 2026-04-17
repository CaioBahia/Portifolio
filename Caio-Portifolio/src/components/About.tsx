import React from 'react';
import { Box, Container, Typography, Card, CardContent, useTheme } from '@mui/material';
import { Code, Palette, Bolt } from '@mui/icons-material';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const purpleGradient = isDark
    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)';

  const boxShadowColor = isDark
    ? 'rgba(139, 92, 246, 0.2)'
    : 'rgba(16, 185, 129, 0.15)';

  return (
    <Card
      sx={{
        height: '100%',
        background: purpleGradient,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 12px 24px ${boxShadowColor}`,
        },
      }}
    >
      <CardContent sx={{ textAlign: 'center', pt: 4 }}>
        <Box sx={{ mb: 2, color: 'primary.main', fontSize: 40 }}>
          {icon}
        </Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const gradientColor = isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)';

  const features = [
    {
      icon: <Code />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-structured code following best practices',
    },
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive, and responsive user interfaces',
    },
    {
      icon: <Bolt />,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver excellent user experience',
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        background: isDark
          ? 'linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #E9F5F0 100%)',
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
            About Me
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
            I'm a passionate developer crafting beautiful digital experiences with modern technologies.
            Specialized in React, Node.js, and full-stack development.
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
            My Journey
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
            With over 5 years of experience in web development, I've had the privilege to work with talented teams
            on diverse projects ranging from startups to enterprise applications. My passion for clean code and user-centric
            design drives every project I undertake.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing
            knowledge with the developer community.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
