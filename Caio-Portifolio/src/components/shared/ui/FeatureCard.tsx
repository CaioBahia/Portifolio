import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';

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

export default FeatureCard;
