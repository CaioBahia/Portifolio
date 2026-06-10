import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card, useTheme, Alert } from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import { useThemeColors } from '../shared/hooks';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type?: 'success' | 'error'; message?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subject = encodeURIComponent(`Contato via portfólio de ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      const mailtoLink = `mailto:caiobahia.dev@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
      setStatus({ type: 'success', message: t.contact.successMessage });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: t.contact.errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const { dotTexture, buttonGradient } = useThemeColors();
  const isDark = theme.palette.mode === 'dark';
  const sectionBackground = isDark ? '#101638' : '#EFF4F9';
  const sectionTexture = dotTexture;

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        backgroundColor: sectionBackground,
        backgroundImage: sectionTexture,
        backgroundSize: '24px 24px, 36px 36px',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'normal',
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 2,
              background: isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.contact.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
            {t.contact.subtitle}
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.03))'
                : 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(52, 211, 153, 0.03))',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              backdropFilter: 'blur(10px)',
              boxShadow: 'none',
              p: 4,
              maxWidth: '500px',
              width: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
              {t.contact.contactTitle}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {status.message && <Alert severity={status.type}>{status.message}</Alert>}
              
              <TextField
                name="name"
                label={t.contact.name}
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
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
                  background: buttonGradient,
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: isDark ? '0 8px 20px rgba(139, 92, 246, 0.4)' : '0 8px 20px rgba(16, 185, 129, 0.4)' },
                }}
              >
                {loading ? t.contact.sending : t.contact.send}
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
