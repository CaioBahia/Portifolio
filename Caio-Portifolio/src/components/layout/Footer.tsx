import React from 'react';
import { Box, Container, Typography, useTheme, IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme.palette.mode === 'dark';
  const gradientColor = isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)';

  return (
    <Box
      component="footer"
      sx={{
        background: isDark
          ? 'linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #E9F5F0 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: 2,
          }}
        >
          {/* Left: Made with love */}
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            Made with <span style={{ color: '#EF4444', fontSize: '1.2rem' }}>♥</span> by Caio
          </Typography>

          {/* Right: Copyright and Back to Top */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="caption" color="text.secondary">
              &copy; {currentYear} Caio Bahia
            </Typography>
            <IconButton
              onClick={scrollToTop}
              size="small"
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: gradientColor,
                  color: isDark ? '#fff' : '#000',
                  transform: 'translateY(-4px)',
                },
              }}
              title="Back to top"
            >
              <ArrowUpward sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;