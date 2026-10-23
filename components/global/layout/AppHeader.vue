<template>
  <header class="app-header">
    <div class="app-header__inner container">
      <NuxtLink to="/" class="app-header__brand" aria-label="На главную">
        <GlAvatar :entity-name="profile.name" :entity-id="7" :size="24" shape="rect" />
        <span class="app-header__brand-name" translate="no">{{ profile.username }}</span>
      </NuxtLink>

      <nav class="app-header__nav" aria-label="Основная навигация">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="app-header__nav-link"
          active-class="is-active"
          :exact="link.to === '/'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="app-header__actions">
        <GlButton
          category="tertiary"
          icon="github"
          href="https://github.com/dmitriev-dmitrii/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        />
      </div>
    </div>
  </header>
</template>

<script>
import GlAvatar from '@gitlab/ui/dist/components/base/avatar/avatar'
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import { PROFILE } from '~/constants/profile'

const NAV_LINKS = [
  { to: '/', label: 'Обо мне', icon: 'user' },
  { to: '/experience', label: 'Опыт', icon: 'work' },
  { to: '/contacts', label: 'Контакты', icon: 'mail' },
]

export default {
  components: { GlAvatar, GlButton },
  data: () => ({
    profile: PROFILE,
    navLinks: NAV_LINKS,
  }),
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--gl-background-color-subtle);
  border-bottom: 1px solid var(--gl-border-color-default);
}

.app-header__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 3rem;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--gl-text-color-heading);
  text-decoration: none;
}

.app-header__brand:hover {
  color: var(--gl-text-color-heading);
  text-decoration: none;
}

.app-header__nav {
  display: flex;
  align-self: stretch;
  gap: 0.25rem;
}

.app-header__nav-link {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  color: var(--gl-text-color-subtle);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  text-decoration: none;
  white-space: nowrap;
}

.app-header__nav-link:hover {
  color: var(--gl-text-color-default);
  text-decoration: none;
  border-bottom-color: var(--gl-border-color-strong);
}

.app-header__nav-link.is-active {
  color: var(--gl-text-color-heading);
  font-weight: 600;
  border-bottom-color: var(--gl-color-blue-500, #1f75cb);
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

@media (max-width: 575.98px) {
  .app-header__inner {
    gap: 0.75rem;
  }

  .app-header__brand-name {
    display: none;
  }

  .app-header__nav-link {
    padding: 0 0.25rem;
  }
}
</style>
