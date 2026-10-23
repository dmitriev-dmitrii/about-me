<template>
  <div class="profile container">
    <aside class="profile__sidebar">
      <GlAvatar
        class="profile__avatar"
        :src="photo"
        :entity-name="profile.name"
        :alt="profile.name"
        :size="96"
      />

      <h1 class="profile__name" translate="no">{{ profile.name }}</h1>
      <p class="profile__username text-subtle" translate="no">@{{ profile.username }}</p>
      <p class="profile__bio">{{ profile.position }}</p>

      <div class="profile__actions">
        <GlButton variant="confirm" icon="mail" to="/contacts">Связаться</GlButton>
        <GlButton icon="work" to="/experience">Опыт</GlButton>
      </div>

      <ul class="profile__meta">
        <li>
          <GlIcon name="location" class="profile__meta-icon" />
          {{ profile.location }}
        </li>
        <li>
          <GlIcon name="work" class="profile__meta-icon" />
          {{ profile.position }}
        </li>
        <li>
          <GlIcon name="calendar" class="profile__meta-icon" />
          {{ ageLabel }}
        </li>
        <li v-for="link in socialLinks" :key="link.name">
          <GlIcon :name="link.icon" class="profile__meta-icon" />
          <GlLink :href="link.href" target="_blank">{{ link.label }}</GlLink>
        </li>
      </ul>
    </aside>

    <div class="profile__content">
      <section class="gl-box">
        <div class="gl-box__header">
          <GlIcon name="doc-text" />
          <span translate="no">README.md</span>
        </div>
        <div class="readme">
          <p class="readme__lead">
            Привет! Я фронтенд-разработчик из Санкт-Петербурга. Пишу на Vue и Nuxt, а когда нужно —
            и бэкенд на Node.js.
          </p>

          <pre class="code-viewer" translate="no"><code><span
            v-for="(line, index) in codeLines"
            :key="index"
            class="code-viewer__line"
          ><span class="code-viewer__number">{{ index + 1 }}</span><span
            v-for="(token, tIndex) in line"
            :key="tIndex"
            :class="token.type && `tok-${token.type}`"
          >{{ token.text }}</span>
</span></code></pre>
        </div>
      </section>

      <section class="gl-box">
        <div class="gl-box__header">
          <GlIcon name="code" />
          Стек
        </div>
        <div class="gl-box__body stack">
          <div v-for="group in stack" :key="group.title" class="stack__group">
            <h2 class="stack__title text-subtle">{{ group.title }}</h2>
            <div class="badge-list">
              <GlBadge v-for="item in group.items" :key="item" :variant="group.variant">
                {{ item }}
              </GlBadge>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GlAvatar from '@gitlab/ui/dist/components/base/avatar/avatar'
import GlBadge from '@gitlab/ui/dist/components/base/badge/badge'
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'
import photo from '~/static/img/dmitriev-dmitrii.jpg'
import { PROFILE, SOCIAL_LINKS } from '~/constants/profile'

// info — основной стек, neutral — остальное
const STACK = [
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

function pluralYears(n) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'год'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'года'
  return 'лет'
}

export default {
  components: { GlAvatar, GlBadge, GlButton, GlIcon, GlLink },

  data: () => ({
    photo,
    profile: PROFILE,
    socialLinks: SOCIAL_LINKS,
    stack: STACK,
  }),

  computed: {
    age() {
      return new Date().getFullYear() - this.profile.birthYear
    },
    ageLabel() {
      return `${this.age} ${pluralYears(this.age)}`
    },
    codeLines() {
      const prop = (key, value, type = 'string') => [
        { text: '  ' },
        { text: key, type: 'property' },
        { text: ': ' },
        { text: value, type },
        { text: ',' },
      ]
      return [
        [
          { text: 'const', type: 'keyword' },
          { text: ' ' },
          { text: 'dmitrii', type: 'variable' },
          { text: ' = {' },
        ],
        prop('name', "'Dmitrii'"),
        prop('surname', "'Dmitriev'"),
        prop('age', String(this.age), 'number'),
        prop('location', `'${this.profile.location}'`),
        prop('position', `'${this.profile.position}'`),
        [{ text: '}' }],
      ]
    },
  },
}
</script>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 767.98px) {
  .profile {
    grid-template-columns: 17.5rem minmax(0, 1fr);
    align-items: start;
  }
}

.profile__avatar {
  margin-bottom: 1rem;
  object-fit: cover;
  object-position: top;
}

.profile__name {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--gl-text-color-heading);
}

.profile__username {
  margin-top: 0.25rem;
}

.profile__bio {
  margin-top: 0.75rem;
}

.profile__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.profile__meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gl-border-color-default);
}

.profile__meta li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  overflow-wrap: anywhere;
}

.profile__meta-icon {
  flex-shrink: 0;
  color: var(--gl-icon-color-subtle);
}

.profile__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
}

.readme {
  padding: 1rem;
}

.readme__lead {
  margin-bottom: 1rem;
}

.code-viewer {
  margin: 0;
  padding: 0.75rem 0;
  font-size: 0.8125rem;
  line-height: 1.6;
  background-color: var(--gl-background-color-subtle);
  border: 1px solid var(--gl-border-color-default);
  border-radius: var(--gl-border-radius-default, 0.25rem);
  color: var(--gl-text-color-default);
  overflow-x: auto;
  white-space: pre !important;
}

.code-viewer__line {
  display: block;
  padding-right: 1rem;
}

.code-viewer__number {
  display: inline-block;
  width: 3rem;
  padding-right: 1rem;
  text-align: right;
  color: var(--gl-text-color-disabled);
  user-select: none;
}

/* подсветка синтаксиса */
.tok-keyword {
  color: #8f2bbb;
}
.tok-variable {
  color: #3a383f;
}
.tok-property {
  color: #1f6fbf;
}
.tok-string {
  color: #217645;
}
.tok-number {
  color: #a55a04;
}

.gl-dark .tok-keyword {
  color: #c792ea;
}
.gl-dark .tok-variable {
  color: #ececef;
}
.gl-dark .tok-property {
  color: #82aaff;
}
.gl-dark .tok-string {
  color: #a8d68a;
}
.gl-dark .tok-number {
  color: #f7a26c;
}

.stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1.25rem 1.5rem;
}

.stack__group:first-child {
  grid-column: 1 / -1;
}

.stack__title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}
</style>
