import React, { useState } from 'react';
import { Box, Container, Typography, useTheme, Tabs, Tab } from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';
import { useThemeColors } from '../shared/hooks';

interface StackItem {
  name: string;
  icon?: React.ReactNode;
  iconUrl?: string;
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
  const { dotTexture } = useThemeColors();
  const [activeTab, setActiveTab] = useState(0);

  const isDark = theme.palette.mode === 'dark';
  const sectionBackground = isDark ? '#0D132A' : '#F8FBFF';
  const sectionTexture = dotTexture;

  const stackCategories: StackCategory[] = [
    {
      label: t.stacks.frontend,
      value: 'frontend',
      color: 'primary',
      items: [
        {
          name: 'React',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: '#61dafb',
        },
        {
          name: 'Angular.js',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg',
          color: '#61dafb',
        },
        {
          name: 'TypeScript',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          color: '#3178c6',
        },
        {
          name: 'Material-UI',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
          color: '#007fff',
        },
        {
          name: 'Tailwind CSS',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          color: '#06b6d4',
        },
        {
          name: 'Vite',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
          color: '#646cff',
        },
      ],
    },
    {
      label: t.stacks.backend,
      value: 'backend',
      color: 'success',
      items: [
        {
          name: 'Java',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          color: '#68a063',
        },
        {
          name: 'Python',
            iconUrl:
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg',
          color: '#68a063',
        },
        {
          name: 'Node.js',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          color: '#68a063',
        },
        {
          name: 'Express',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          color: '#000000',
        },
        {
          name: 'NestJS',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
          color: '#e0234e',
        },
        {
          name: 'REST APIs',
          icon: '📡',
          color: '#ff6b6b',
        },
      ],
    },
    {
      label: t.stacks.database,
      value: 'database',
      color: 'warning',
      items: [
        {
          name: 'PostgreSQL',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          color: '#336791',
        },
        {
          name: 'MySQL',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          color: '#00758f',
        },      
        {
          name: 'Prisma ORM',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
          color: '#2d3748',
        },
        {
          name: 'TypeORM',
          icon: '🔧',
          color: '#eb8000',
        },
      ],
    },
    {
      label: t.stacks.devops,
      value: 'devops',
      color: 'error',
      items: [
        {
          name: 'Git',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          color: '#f1502f',
        },
        {
          name: 'Docker',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          color: '#2496ed',
        },
        {
          name: 'GitHub Actions',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          color: '#2088ff',
        },
        {
          name: 'CI/CD',
          icon: '🔄',
          color: '#0d778c',
        },
        {
          name: 'Linux',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          color: '#fcc624',
        },
      
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="stacks"
      sx={{
        py: 12,
        backgroundColor: sectionBackground,
        backgroundImage: sectionTexture,
        backgroundSize: '24px 24px, 36px 36px',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'normal',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 2,
              background: isDark
                ? 'linear-gradient(45deg, #1e40af 30%, #3b82f6 90%)'
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
                  ? 'linear-gradient(90deg, #1e40af, #3b82f6)'
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
                }}
              >
                <Typography variant="h6" sx={{ mb: 4, fontWeight: 700 }}>
                  {category.label} {t.stacks.technologiesUsed}
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(3, 1fr)',
                      md: 'repeat(4, 1fr)',
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
                          ? 'linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(2, 132, 199, 0.05))'
                          : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))',
                        border: `1px solid ${theme.palette.divider}`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: isDark
                            ? '0 12px 24px rgba(30, 64, 175, 0.2)'
                            : '0 12px 24px rgba(16, 185, 129, 0.15)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        {item.iconUrl ? (
                          <Box
                            component="img"
                            src={item.iconUrl}
                            alt={item.name}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        ) : (
                          <Box sx={{ fontSize: '3rem' }}>{item.icon}</Box>
                        )}
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          textAlign: 'center',
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