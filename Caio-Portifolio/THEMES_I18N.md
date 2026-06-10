# Implementação de Temas e Internacionalização

## Sistema de Temas Personalizados

### Tema Escuro (Dark Mode)
- **Cores Primárias**: Azul marinho `#1e40af` com tons `#3b82f6`
- **Cores Secundárias**: Ciano `#0284c7`
- **Background**: Azul escuro `#0c1929` → `#111e2e`
- **Detalhes**: Azul profundo `#082f49`
- **Texto**: Branco `#FFFFFF` com azul claro `#bfdbfe`

### Tema Claro (Light Mode)
- **Cores Primárias**: Verde `#10B981` com tons `#6EE7B7`
- **Cores Secundárias**: Verde `#34D399`
- **Background**: Off-white `#F8FBFF` → Branco `#FFFFFF`
- **Detalhes**: Verde claro `#D1FAE5`
- **Texto**: Cinza escuro `#111827` com `#4B5563`

**Arquivo**: `src/theme.ts` — Temas Material-UI personalizados

### Hook centralizado: `useThemeColors`
Cores e gradientes compartilhados ficam em `src/components/shared/hooks/use-theme-colors.ts`:
- `gradientColor` — texto com gradiente
- `sectionGradient` — fundo de cards e seções
- `headerBg` / `footerBg` — glass-morphism do layout
- `sectionBg` — fundo de seções (About)
- `boxShadowColor` — sombras temáticas

---

## Sistema de Internacionalização (i18n)

### Arquitetura

**`src/i18n/translations.ts`** — Dicionário PT/EN organizado por seção

**`src/i18n/LanguageContext.tsx`** — Context com persistência em `localStorage` (`vite-ui-language`)

**`src/i18n/useTranslation.ts`** — Hook `const { t, language } = useTranslation()`

### Conteúdo traduzido
- Navegação, Hero, About, Stacks, Projects, Contact, Footer, Header

---

## Persistência de preferências

| Preferência | Chave localStorage | Padrão |
|-------------|-------------------|--------|
| Tema | `vite-ui-theme` | `dark` |
| Idioma | `vite-ui-language` | `pt` |

---

## Cores por contexto

### Modo Escuro (Navy Blue)
```
Primary:     #1e40af
Light:       #3b82f6
Dark:        #1e3a8a
Secondary:   #0284c7
Background:  #0c1929
Paper:       #111e2e
Divider:     #082f49
Text:        #FFFFFF
```

### Modo Claro (Green)
```
Primary:     #10B981
Light:       #6EE7B7
Dark:        #059669
Secondary:   #34D399
Background:  #F8FBFF
Paper:       #FFFFFF
Divider:     #D1FAE5
Text:        #111827
```

---

## Uso

```tsx
import { useTranslation } from '../i18n/useTranslation';
import { useThemeColors } from '../shared/hooks';

const { t } = useTranslation();
const { gradientColor, sectionGradient } = useThemeColors();
```
