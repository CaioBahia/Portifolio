import React, { useState } from 'react';
import { Box, Container, Typography, useTheme, Tabs, Tab } from '@mui/material';
import { useTranslation } from '../i18n/useTranslation';

interface StackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface StackCategory {
  label: string;
  value: string;
  color: 'primary' | 'success' | 'warning' | 'error';
  items: StackItem[];
}

const Stacks: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const isDark = theme.palette.mode === 'dark';

  const stackCategories: StackCategory[] = [
    {
      label: t.stacks.frontend,
      value: 'frontend',
      color: 'primary',
      items: [
        { name: 'React', icon: '⚛️', color: '#61dafb' },
        { name: 'TypeScript', icon: '📘', color: '#3178c6' },
        { name: 'Material-UI', icon: '🎨', color: '#007fff' },
        { name: 'Tailwind CSS', icon: '🌬️', color: '#06b6d4' },
        { name: 'Vite', icon: '⚡', color: '#646cff' },
        { name: 'Redux', icon: '🔄', color: '#764abc' },
        { name: 'Next.js', icon: '▲', color: '#000000' },
      ],
    },
    {
      label: t.stacks.backend,
      value: 'backend',
      color: 'success',
      items: [
        { name: 'Node.js', icon: '🟢', color: '#68a063' },
        { name: 'Express', icon: '⚙️', color: '#000000' },
        { name: 'NestJS', icon: '🏠', color: '#e0234e' },
        { name: 'FastAPI', icon: '⚡', color: '#009688' },
        { name: 'Django', icon: '🌿', color: '#092e20' },
        { name: 'REST APIs', icon: '📡', color: '#ff6b6b' },
        { name: 'GraphQL', icon: '📊', color: '#e10098' },
      ],
    },
    {
      label: t.stacks.database,
      value: 'database',
      color: 'warning',
      items: [
        { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
        { name: 'MySQL', icon: '🐬', color: '#00758f' },
        { name: 'MongoDB', icon: '🍃', color: '#13aa52' },
        { name: 'Redis', icon: '⚡', color: '#dc382d' },
        { name: 'Firebase', icon: '🔥', color: '#ffa726' },
        { name: 'Prisma ORM', icon: '💾', color: '#2d3748' },
        { name: 'TypeORM', icon: '🔧', color: '#eb8000' },
      ],
    },
    {
      label: t.stacks.devops,
      value: 'devops',
      color: 'error',
      items: [
        { name: 'Git', icon: '🔗', color: '#f1502f' },
        { name: 'Docker', icon: '🐳', color: '#2496ed' },
        { name: 'GitHub Actions', icon: '⚙️', color: '#2088ff' },
        { name: 'CI/CD', icon: '🔄', color: '#0d778c' },
        { name: 'AWS', icon: '☁️', color: '#ff9900' },
        { name: 'Linux', icon: '🐧', color: '#fcc624' },
        { name: 'Webpack', icon: '📦', color: '#8dd6f9' },
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="stacks"
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
              background: isDark
                ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)'
                : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.stacks.title}
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
            {t.stacks.subtitle}
          </Typography>
        </Box>

        {/* Tabs and Content */}
        <Box
          sx={{
            background: isDark
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            sx={{
              px: 3,
              borderBottom: `2px solid ${theme.palette.divider}`,
              '& .MuiTabs-indicator': {
                background: isDark
                  ? 'linear-gradient(90deg, #8B5CF6, #A78BFA)'
                  : 'linear-gradient(90deg, #10B981, #34D399)',
              },
            }}
          >
            {stackCategories.map((category) => (
              <Tab key={category.value} label={category.label} />
            ))}
          </Tabs>

          <Box sx={{ p: 4 }}>
            {stackCategories.map((category, index) => (
              <Box
                key={category.value}
                sx={{
                  display: activeTab === index ? 'block' : 'none',
                  animation: activeTab === index ? 'fadeIn 0.3s ease-in' : 'none',
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 4, fontWeight: 700 }}>
                  {category.label} {t.stacks.technologiesUsed}
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(3, 1fr)',
                      sm: 'repeat(4, 1fr)',
                      md: 'repeat(5, 1fr)',
                      lg: 'repeat(6, 1fr)',
                    },
                    gap: 3,
                  }}
                >
                  {category.items.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        p: 3,
                        borderRadius: 2,
                        background: isDark
                          ? `linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.05))`
                          : `linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))`,
                        border: `1px solid ${theme.palette.divider}`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: isDark
                            ? '0 12px 24px rgba(139, 92, 246, 0.2)'
                            : '0 12px 24px rgba(16, 185, 129, 0.15)',
                        },
                        '&:hover .tech-label': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                      }}
                    >
                      {/* Icon/Emoji */}
                      <Box
                        sx={{
                          fontSize: '3rem',
                          textAlign: 'center',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        {item.icon}
                      </Box>

                      {/* Label on Hover */}
                      <Typography
                        className="tech-label"
                        variant="caption"
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          opacity: 0,
                          transform: 'translateY(10px)',
                          transition: 'all 0.3s ease',
                          color: 'text.secondary',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Stacks;