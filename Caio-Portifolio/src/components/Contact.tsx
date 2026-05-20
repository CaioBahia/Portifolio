import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card, useTheme, Stack, Alert } from '@mui/material';
import { Mail, Phone, GitHub, LinkedIn } from '@mui/icons-material';
import { useTranslation } from '../i18n/useTranslation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type?: 'success' | 'error';
  message?: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulated form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({ type: 'success', message: t.contact.successMessage });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: t.contact.errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    { icon: <Mail sx={{ fontSize: 28 }} />, label: 'Email', link: 'mailto:caio@example.com' },
    { icon: <Phone sx={{ fontSize: 28 }} />, label: 'Phone', link: 'tel:+55XXXXXXX' },
    { icon: <GitHub sx={{ fontSize: 28 }} />, label: 'GitHub', link: 'https://github.com' },
    { icon: <LinkedIn sx={{ fontSize: 28 }} />, label: 'LinkedIn', link: 'https://linkedin.com' },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a0e27 0%, #0f3460 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #e0e7ff 100%)',
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.contact.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {t.contact.subtitle}
          </Typography>
        </Box>

        {/* Contact Form and Links */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {/* Form */}
          <Card
            sx={{
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.05) 100%)'
                : 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 203, 243, 0.02) 100%)',
              border: `1px solid ${theme.palette.divider}`,
              p: 4,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
              {t.contact.contactTitle}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {status.message && (
                <Alert severity={status.type} sx={{ animation: 'slideDown 0.3s ease' }}>
                  {status.message}
                </Alert>
              )}
              <TextField
                name="name"
                label={t.contact.name}
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              <TextField
                name="email"
                label={t.contact.email}
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="message"
                label={t.contact.message}
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  py: 1.5,
                  background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(33, 150, 243, 0.3)',
                  },
                }}
              >
                {loading ? t.contact.sending : t.contact.send}
              </Button>
            </Box>
          </Card>

          {/* Contact Links */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {t.contact.otherWays}
            </Typography>
            <Stack spacing={2}>
              {contactLinks.map((item) => (
                <Card
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.label}
                  sx={{
                    p: 2.5,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 203, 243, 0.02) 100%)',
                    border: `1px solid ${theme.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 16px rgba(33, 150, 243, 0.2)'
                        : '0 8px 16px rgba(33, 150, 243, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main' }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.label === 'Email' && t.contact.sendEmail}
                      {item.label === 'Phone' && t.contact.callMe}
                      {item.label === 'GitHub' && t.contact.checkProjects}
                      {item.label === 'LinkedIn' && t.contact.connectWithMe}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
