<template>
  <div class="container">
    <div class="profile">
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
          <li v-if="profile.location">
            <GlIcon name="location" class="profile__meta-icon" />
            {{ profile.location }}
          </li>
          <li>
            <GlIcon name="work" class="profile__meta-icon" />
            {{ profile.position }}
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
            <p v-if="profile.summary" class="readme__lead">{{ profile.summary }}</p>
            <div class="code-viewer font-monospace" translate="no">
              <div class="code-viewer__line">
                <span class="tok-keyword">const</span> <span class="tok-variable">dmitrii</span> = {
              </div>
              <div class="code-viewer__line code-viewer__line--indent">
                <span class="tok-property">name</span>: <span class="tok-string">'Dmitrii'</span>,
              </div>
              <div class="code-viewer__line code-viewer__line--indent">
                <span class="tok-property">surname</span>:
                <span class="tok-string">'Dmitriev'</span>,
              </div>
              <div class="code-viewer__line code-viewer__line--indent">
                <span class="tok-property">age</span>: <span class="tok-number">{{ age }}</span
                >,
              </div>
              <div class="code-viewer__line code-viewer__line--indent">
                <span class="tok-property">location</span>:
                <span class="tok-string">'{{ profile.location }}'</span>,
              </div>
              <div class="code-viewer__line code-viewer__line--indent">
                <span class="tok-property">position</span>:
                <span class="tok-string">'{{ profile.position }}'</span>,
              </div>
              <div class="code-viewer__line">}</div>
            </div>
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
  </div>
</template>

<script>
import GlAvatar from '@gitlab/ui/dist/components/base/avatar/avatar'
import GlBadge from '@gitlab/ui/dist/components/base/badge/badge'
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'
import photo from '~/static/img/dmitriev-dmitrii.jpg'
import { PROFILE, SOCIAL_LINKS, STACK } from '~/constants/profile'

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
  counter-reset: line;
}

/* Код написан прямо в шаблоне: переносы от форматтера схлопываются в пробел,
   отступ свойств задаётся классом, номера строк — CSS-счётчиком */
.code-viewer__line {
  position: relative;
  padding-left: 4rem;
  padding-right: 1rem;
  white-space: nowrap;
}

.code-viewer__line::before {
  counter-increment: line;
  content: counter(line);
  position: absolute;
  left: 0;
  width: 3rem;
  text-align: right;
  color: var(--gl-text-color-disabled);
  user-select: none;
}

.code-viewer__line--indent {
  padding-left: calc(4rem + 2ch);
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
