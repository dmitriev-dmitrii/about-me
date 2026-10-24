<template>
  <div class="contacts container">
    <section class="settings-section">
      <div class="settings-section__intro">
        <h1 class="section-title">Контакты</h1>
        <p class="text-subtle">
          Быстрее всего со мной связаться в Telegram, можно и на почту. Код и пет-проекты — на
          GitHub и GitLab.
        </p>
      </div>

      <div class="contacts__cards">
        <div v-for="contact in contacts" :key="contact.id" class="gl-box contacts__card">
          <span class="contacts__tile" :class="`contacts__tile--${contact.id}`">
            <svg
              v-if="contact.id === 'telegram'"
              class="contacts__brand-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M21.43 4.1 2.97 11.22c-1.26.5-1.25 1.2-.23 1.52l4.74 1.48 10.97-6.92c.52-.32 1-.15.6.2l-8.88 8.02-.34 4.9c.5 0 .72-.23 1-.5l2.3-2.24 4.79 3.54c.88.49 1.52.24 1.74-.82l3.15-14.83c.32-1.29-.49-1.87-1.38-1.47z"
              />
            </svg>
            <GlIcon v-else :name="contact.icon" :size="24" />
          </span>
          <div class="contacts__info">
            <span class="contacts__title">{{ contact.title }}</span>
            <GlLink :href="contact.href" target="_blank" class="contacts__handle">
              {{ contact.value }}
            </GlLink>
          </div>
          <div class="contacts__actions">
            <GlButton
              v-gl-tooltip
              :title="contact.action"
              :aria-label="contact.action"
              icon="external-link"
              category="tertiary"
              :href="contact.href"
              target="_blank"
              rel="noopener noreferrer"
            />
            <GlButton
              v-gl-tooltip
              :title="copiedId === contact.id ? 'Скопировано' : 'Скопировать'"
              aria-label="Скопировать"
              :icon="copiedId === contact.id ? 'check' : 'copy-to-clipboard'"
              category="tertiary"
              @click="copy(contact)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'
import { GlTooltipDirective } from '@gitlab/ui/dist/directives/tooltip/tooltip'
import { EMAIL, SOCIAL_LINKS, TELEGRAM } from '~/constants/profile'

export default {
  components: { GlButton, GlIcon, GlLink },

  directives: { GlTooltip: GlTooltipDirective },

  data: () => ({
    contacts: [
      {
        id: 'telegram',
        title: 'Telegram',
        icon: 'paper-airplane',
        value: `@${TELEGRAM}`,
        href: `https://t.me/${TELEGRAM}`,
        action: 'Написать',
      },
      {
        id: 'email',
        title: 'Почта',
        icon: 'mail',
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        action: 'Написать',
      },
      ...SOCIAL_LINKS.map((link) => ({
        id: link.name.toLowerCase(),
        title: link.name,
        icon: link.icon,
        value: link.label,
        href: link.href,
        action: 'Открыть профиль',
      })),
    ],
    copiedId: null,
  }),

  methods: {
    async copy(contact) {
      try {
        await navigator.clipboard.writeText(contact.value)
        this.copiedId = contact.id
        setTimeout(() => {
          this.copiedId = null
        }, 2000)
      } catch (e) {
        // буфер обмена недоступен (например, не https) — контакт и так виден на странице
      }
    },
  },
}
</script>

<style scoped>
.settings-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 2rem;
}

.settings-section__intro .text-subtle {
  margin-top: 0.5rem;
}

.contacts__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 767.98px) {
  .contacts__cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.contacts__card {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1rem;
}

.contacts__tile {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: var(--gl-background-color-strong);
}

.contacts__tile--telegram {
  color: #2aabee;
}

.contacts__brand-icon {
  width: 1.375rem;
  height: 1.375rem;
  margin-left: -0.125rem;
  fill: currentColor;
}

.contacts__tile--email {
  color: var(--gl-text-color-default);
}

.contacts__tile--github {
  color: var(--gl-text-color-default);
}

.contacts__tile--gitlab {
  color: #fc6d26;
}

.contacts__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.contacts__title {
  color: var(--gl-text-color-subtle);
  font-size: 0.875rem;
}

.contacts__handle {
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contacts__actions {
  display: flex;
  flex-shrink: 0;
  gap: 0.25rem;
}
</style>
