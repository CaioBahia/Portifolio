import React from 'react';
import { Box, Container, Typography, Link, Stack, useTheme, Divider } from '@mui/material';
import { GitHub, LinkedIn, Mail, ArrowUpward } from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <GitHub sx={{ fontSize: 24 }} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <LinkedIn sx={{ fontSize: 24 }} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail sx={{ fontSize: 24 }} />, href: 'mailto:caio@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#stacks' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #000 0%, #0a0e27 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #e0e7ff 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: 4,
            mb: 6,
          }}
        >
          {/* Brand Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Caio Bahia
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Full Stack Developer passionate about creating beautiful, functional digital experiences.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Navigation
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      pl: 1,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Social Links */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Connect
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(33, 150, 243, 0.1)'
                      : 'rgba(33, 150, 243, 0.05)',
                    border: `1px solid ${theme.palette.divider}`,
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'primary.main',
                      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {link.icon}
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            &copy; {currentYear} Caio Bahia. All rights reserved.
          </Typography>

          <Box
            component="button"
            onClick={scrollToTop}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              background: 'transparent',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              color: 'text.secondary',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'primary.main',
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                transform: 'translateY(-4px)',
              },
            }}
            title="Back to top"
          >
            <ArrowUpward sx={{ fontSize: 20 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;