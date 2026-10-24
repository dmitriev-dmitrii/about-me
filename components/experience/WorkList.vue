<template>
  <ul v-if="items.length" class="row-list work-list">
    <li v-for="item in items" :key="item.id" class="work-item">
      <GlAvatar
        :entity-name="item.company"
        :entity-id="item.id"
        :size="48"
        shape="rect"
        class="work-item__avatar"
      />

      <div class="work-item__body">
        <header>
          <h2 class="work-item__position">{{ item.position }}</h2>

          <ul class="work-item__meta text-subtle">
            <li>
              <GlIcon name="organization" :size="14" />
              <GlLink v-if="item.companyUrl" :href="item.companyUrl" target="_blank">
                {{ item.company }}
              </GlLink>
              <span v-else>{{ item.company }}</span>
            </li>
            <li>
              <GlIcon name="calendar" :size="14" />
              {{ item.period }}
            </li>
            <li>
              <GlIcon name="clock" :size="14" />
              {{ item.duration }}
            </li>
          </ul>
        </header>

        <dl class="work-item__sections">
          <template v-for="section in item.sections">
            <dt :key="`${section.title}-title`" class="work-item__section-title">
              {{ section.title }}
            </dt>
            <dd :key="`${section.title}-text`">
              {{ section.text }}
              <GlLink
                v-if="section.url"
                :href="section.url"
                target="_blank"
                class="work-item__section-link"
              >
                {{ section.urlLabel }}
              </GlLink>
            </dd>
          </template>
        </dl>

        <section v-if="item.achievements.length">
          <h3 class="work-item__section-title">Что сделал</h3>
          <ul class="work-item__achievements">
            <li v-for="(text, index) in item.achievements" :key="index">{{ text }}</li>
          </ul>
        </section>

        <div class="badge-list">
          <GlBadge v-for="tech in item.stack" :key="tech">{{ tech }}</GlBadge>
        </div>
      </div>
    </li>
  </ul>

  <p v-else class="text-subtle work-list__empty">Пока пусто</p>
</template>

<script>
import GlAvatar from '@gitlab/ui/dist/components/base/avatar/avatar'
import GlBadge from '@gitlab/ui/dist/components/base/badge/badge'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'
import { stripProtocol } from '~/utils/links'

export default {
  components: { GlAvatar, GlBadge, GlIcon, GlLink },

  props: {
    workList: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    items() {
      return this.workList.map((item) => ({
        ...item,
        achievements: item.achievements || [],
        sections: [
          { title: 'О компании', text: item.about },
          {
            title: item.project.name ? `Проект · ${item.project.name}` : 'Проект',
            text: item.project.description,
            url: item.project.url,
            urlLabel: item.project.url && stripProtocol(item.project.url),
          },
          { title: 'Роль и команда', text: item.role },
        ].filter((section) => section.text),
      }))
    },
  },
}
</script>

<style scoped>
.work-item {
  padding: 1.5rem 0 !important;
}

.work-item__avatar {
  flex-shrink: 0;
}

.work-item__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
  max-width: 50rem;
}

.work-item__position {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--gl-text-color-heading);
}

.work-item__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  margin-top: 0.25rem;
}

.work-item__meta li {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.work-item__sections {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
}

.work-item__section-link {
  display: inline-block;
  margin-top: 0.25rem;
}

.work-item__sections dd {
  margin: 0 0 0.5rem;
}

.work-item__section-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--gl-text-color-subtle);
  margin-bottom: 0.25rem;
}

.work-item__achievements {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.work-item__achievements li {
  position: relative;
  padding-left: 1rem;
}

.work-item__achievements li::before {
  content: '';
  position: absolute;
  left: 0.125rem;
  top: 0.6em;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: var(--site-gradient, var(--gl-text-color-subtle));
}

.work-list__empty {
  padding: 1rem 0;
}

@media (max-width: 575.98px) {
  .work-item {
    flex-direction: column;
    gap: 0.75rem !important;
  }
}
</style>
