import { useMemo } from 'react';
import { useTheme } from '@mui/material';

/**
 * Custom hook that provides centralized theme color values
 * Avoids recalculating gradients and shadows in every component
 */
export const useThemeColors = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const colors = useMemo(
    () => ({
      isDark,
      gradientColor: isDark
        ? `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`
        : `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
      buttonGradient: isDark
        ? `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
        : `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
      sectionGradient: isDark
        ? 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(2, 132, 199, 0.05) 100%)'
        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)',
      dotTexture: isDark
        ? 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)'
        : 'radial-gradient(circle, rgba(16,185,129,0.14) 1px, transparent 1px), radial-gradient(circle, rgba(52,211,153,0.1) 1px, transparent 1px)',
      boxShadowColor: isDark
        ? 'rgba(30, 64, 175, 0.2)'
        : 'rgba(16, 185, 129, 0.15)',
      headerBg: isDark
        ? 'rgba(15, 15, 30, 0.85)'
        : 'rgba(249, 250, 251, 0.85)',
      footerBg: isDark
        ? 'rgba(15, 15, 30, 0.92)'
        : 'rgba(249, 250, 251, 0.96)',
      sectionBg: isDark ? '#0F0F1E' : '#F9FAFB',
    }),
    [isDark, theme.palette.primary.dark, theme.palette.primary.main, theme.palette.primary.light],
  );

  return colors;
};
