import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  useTheme,
} from '@mui/material';
import { GitHub as GitHubIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { useTranslation } from '../../i18n/useTranslation';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    fullDescription:
      'Built a complete e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard. Implemented JWT authentication and responsive design.',
    image: '📦',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    fullDescription:
      'Developed a real-time task management app with WebSocket integration for live collaboration. Features include user teams, task categorization, and progress tracking.',
    image: '✓',
    technologies: ['React', 'Firebase', 'WebSocket', 'Material-UI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather app with real-time data and forecasts.',
    fullDescription:
      'Created a weather dashboard with real-time API data, interactive maps, and 7-day forecasts. Implemented geolocation and theme switching for better UX.',
    image: '⛅',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Mapbox'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-4',
    title: 'Social Media Feed',
    description: 'A social platform with posts, comments, and user interactions.',
    fullDescription:
      'Built a social media feed with user authentication, post creation, comments, likes, and real-time notifications. Includes image upload and user profiles.',
    image: '👥',
    technologies: ['React', 'Express', 'PostgreSQL', 'AWS S3'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-5',
    title: 'Design System',
    description: 'A comprehensive component library and design system.',
    fullDescription:
      'Developed a complete design system with reusable components, documentation, and Storybook integration. Includes accessibility features and responsive design patterns.',
    image: '🎨',
    technologies: ['React', 'Storybook', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-6',
    title: 'Analytics Dashboard',
    description: 'A data visualization dashboard with charts and metrics.',
    fullDescription:
      'Created an analytics dashboard with real-time data visualization, custom charts, and exportable reports. Features drag-and-drop widget arrangement.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDark = theme.palette.mode === 'dark';
  const gradientColor = isDark ? 'linear-gradient(45deg, #8B5CF6 30%, #A78BFA 90%)' : 'linear-gradient(45deg, #10B981 30%, #34D399 90%)';
  const purpleGradient = isDark
    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)';
  const boxShadowColor = isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(16, 185, 129, 0.15)';
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  // Create projects array with translations
  const projectsData: Project[] = t.projects.projects.map((translatedProject: any, index: number) => ({
    id: `project-${index + 1}`,
    title: translatedProject.title,
    description: translatedProject.description,
    fullDescription: translatedProject.fullDescription,
    image: projects[index]?.image || '',
    technologies: projects[index]?.technologies || [],
    githubUrl: projects[index]?.githubUrl || 'https://github.com',
    liveUrl: projects[index]?.liveUrl,
  }));

  const handleOpenDialog = (projectId: string) => {
    setOpenDialog(projectId);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  const currentProject = projectsData.find((p) => p.id === openDialog);

  return (
    <Box
      component="section"
      id="projects"
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
            {t.projects.title}
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
            {t.projects.subtitle}
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {projectsData.map((project) => (
            <Card
              key={project.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: purpleGradient,
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 12px 24px ${boxShadowColor}`,
                },
              }}
            >
              {/* Project Icon/Image */}
              <Box
                sx={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  py: 3,
                  background: isDark
                    ? 'rgba(139, 92, 246, 0.1)'
                    : 'rgba(16, 185, 129, 0.05)',
                }}
              >
                {project.image}
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {project.description}
                </Typography>

                {/* Technologies */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.75rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              {/* Actions */}
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  gap: 1,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleOpenDialog(project.id)}
                  sx={{
                    flex: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t.projects.learnMore}
                </Button>
                <Button
                  size="small"
                  variant="text"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<GitHubIcon sx={{ fontSize: '1rem' }} />}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t.projects.code}
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Project Detail Dialog */}
      {currentProject && (
        <Dialog
          open={Boolean(openDialog)}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.05) 100%)'
                : 'linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 203, 243, 0.02) 100%)',
              border: `1px solid ${theme.palette.divider}`,
            },
          }}
        >
          <DialogTitle sx={{ fontWeight: 700 }}>{currentProject.title}</DialogTitle>
          <DialogContent sx={{ pt: 2 }}>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              {currentProject.fullDescription}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              {t.projects.technologiesUsed}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {currentProject.technologies.map((tech) => (
                <Chip key={tech} label={tech} color="primary" variant="outlined" size="small" />
              ))}
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Button onClick={handleCloseDialog}>{t.projects.close}</Button>
            {currentProject.liveUrl && (
              <Button
                variant="contained"
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon />}
              >
                {t.projects.viewLive}
              </Button>
            )}
            <Button
              variant="contained"
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<GitHubIcon />}
            >
              {t.projects.code}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Projects;
