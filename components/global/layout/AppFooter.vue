<template>
  <footer class="app-footer">
    <div class="app-footer__inner container">
      <span class="text-subtle" translate="no">
        {{ startYear }}–{{ year }}
        <template v-if="profile.name"> {{ profile.name }}</template>
      </span>

      <ul class="app-footer__links">
        <li v-for="link in socialLinks" :key="link.name">
          <GlLink :href="link.href" target="_blank" class="app-footer__link">
            <GlIcon :name="link.icon" :size="16" />
            {{ link.name }}
          </GlLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { PROFILE, SOCIAL_LINKS } from '~/constants/profile'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'

export default {
  components: { GlIcon, GlLink },
  data: () => ({
    profile: PROFILE,
    socialLinks: SOCIAL_LINKS,
    startYear: 2019,
    year: new Date().getFullYear(),
  }),
}
</script>

<style scoped>
.app-footer {
  border-top: 1px solid var(--gl-border-color-default);
  background-color: var(--gl-background-color-subtle);
  padding: 1.5rem 0;
}

.app-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
}

.app-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.app-footer__link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
