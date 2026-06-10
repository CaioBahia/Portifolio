import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { useThemeColors } from '../hooks';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  const theme = useTheme();
  const { sectionGradient, boxShadowColor } = useThemeColors();

  return (
    <Card
      sx={{
        height: '100%',
        background: sectionGradient,
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

export default React.memo(FeatureCard);
