import React, { useState } from 'react';
import { Box, Container, Typography, useTheme, Tabs, Tab } from '@mui/material';
import { useTranslation } from '../../i18n/useTranslation';

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
  const [activeTab, setActiveTab] = useState(0);

  const isDark = theme.palette.mode === 'dark';

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
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          color: '#06b6d4',
        },
        {
          name: 'Vite',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
          color: '#646cff',
        },
        {
          name: 'Redux',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
          color: '#764abc',
        },
        {
          name: 'Next.js',
          icon: '▲',
          color: '#000000',
        },
      ],
    },
    {
      label: t.stacks.backend,
      value: 'backend',
      color: 'success',
      items: [
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
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
          color: '#e0234e',
        },
        {
          name: 'FastAPI',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          color: '#009688',
        },
        {
          name: 'Django',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
          color: '#092e20',
        },
        {
          name: 'REST APIs',
          icon: '📡',
          color: '#ff6b6b',
        },
        {
          name: 'GraphQL',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
          color: '#e10098',
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
          name: 'MongoDB',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#13aa52',
        },
        {
          name: 'Redis',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          color: '#dc382d',
        },
        {
          name: 'Firebase',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          color: '#ffa726',
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
          name: 'AWS',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          color: '#ff9900',
        },
        {
          name: 'Linux',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          color: '#fcc624',
        },
        {
          name: 'Webpack',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
          color: '#8dd6f9',
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
        background: isDark
          ? 'linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #E9F5F0 100%)',
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
                          ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.05))'
                          : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))',
                        border: `1px solid ${theme.palette.divider}`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: isDark
                            ? '0 12px 24px rgba(139, 92, 246, 0.2)'
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