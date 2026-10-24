// Профиль, ссылки и стек — задаются прямо на фронте.
// Опыт работы и пет-проекты приходят из gist (about-me.json), см. store/content.js

export const PROFILE = {
  name: 'Dmitriev Dmitrii',
  username: 'dmitriev-dmitrii',
  position: 'Frontend Developer',
  summary:
    'Привет! Я JavaScript / Node.js-разработчик, специализирующийся на фронтенде (Vue / Nuxt). Создаю сложные SPA и платформы на базе микрофронтенд-архитектуры, а при необходимости — работаю и с бэкендом.',
  location: 'Saint-Petersburg',
  birthYear: 1992,
  experience: '6 лет',
}

// icon — имя иконки из @gitlab/svgs
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: 'github',
    label: 'github.com/dmitriev-dmitrii',
    href: 'https://github.com/dmitriev-dmitrii',
  },
  {
    name: 'GitLab',
    icon: 'tanuki',
    label: 'gitlab.com/dmitriev-dmitrii',
    href: 'https://gitlab.com/dmitriev-dmitrii',
  },
]

// variant: info — основной стек (выделяется цветом), neutral — остальное
export const STACK = [
  {
    title: 'Основное',
    variant: 'info',
    items: ['Vue 3', 'Vue 2', 'Nuxt 3', 'Nuxt 2', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Данные и состояние',
    variant: 'neutral',
    items: ['Pinia', 'Vuex', 'TanStack Query', 'REST API', 'WebSocket', 'WebRTC'],
  },
  {
    title: 'Архитектура',
    variant: 'neutral',
    items: ['SPA', 'SSR', 'Микрофронтенды', 'BFF', 'Directus (Headless CMS)'],
  },
  {
    title: 'Вёрстка и UI',
    variant: 'neutral',
    items: ['HTML', 'SCSS', 'Tailwind', 'Vuetify', 'Element UI', 'Figma'],
  },
  {
    title: 'Сборка и DevOps',
    variant: 'neutral',
    items: ['Vite', 'Webpack', 'Docker', 'CI/CD', 'Git', 'Linux'],
  },
  {
    title: 'Бэкенд',
    variant: 'neutral',
    items: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Тесты и документация',
    variant: 'neutral',
    items: ['Jest', 'Storybook'],
  },
  {
    title: 'Доводилось работать',
    variant: 'neutral',
    items: ['jQuery', 'PHP', 'Gulp'],
  },
]
