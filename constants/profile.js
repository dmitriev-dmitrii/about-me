export const PROFILE = {
  name: 'Dmitriev Dmitrii',
  username: 'dmitriev-dmitrii',
  position: 'Frontend Developer',
  summary:
    'Привет! Я JavaScript-разработчик с фокусом на фронтенде - Vue / Nuxt. ' +
    'Делал сложные SPA на Vue 2 и Vue 3 и SSR-приложения на Nuxt в микрофронтендной архитектуре. ' +
    'Могу выйти и за пределы фронта: напишу API на Node.js, упакую в Docker и задеплою - ' +
    'Linux у меня основная ОС, базовый DevOps не пугает. ' +
    'В работе активно использую нейросети и AI-ассистентов: быстрее разбираюсь в чужом коде, ' +
    'прототипирую и отдаю рутину машине.',
  location: 'Saint-Petersburg',
  birthYear: 1992,
  startCarrierYear: 2019,
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
    items: ['Vue 3', 'Vue 2', 'Nuxt 3', 'Nuxt 2', 'TypeScript', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Данные и состояние',
    variant: 'neutral',
    items: ['Pinia', 'Vuex', 'TanStack Query', 'REST API', 'WebSocket', 'WebRTC'],
  },
  {
    title: 'Архитектура',
    variant: 'neutral',
    items: ['SPA', 'SSR', 'Микрофронтенды', 'BFF'],
  },
  {
    title: 'Вёрстка и UI',
    variant: 'neutral',
    items: ['HTML', 'SCSS', 'Tailwind', 'Vuetify', 'Element UI', 'Bootstrap', 'Figma'],
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
    items: ['Jest', 'Storybook', 'Confluence'],
  },
  {
    title: 'Доводилось работать',
    variant: 'neutral',
    items: ['jQuery', 'PHP', 'Gulp', 'WebRtc', 'Directus (Headless CMS)'],
  },
]

export const TELEGRAM = 'dmitrii_dmitriev_dev'
export const EMAIL = 'dmitrii.dmitriev.dev@gmail.com'
