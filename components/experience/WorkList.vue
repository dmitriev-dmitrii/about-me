<template>
  <ul v-if="workList.length" class="row-list work-list">
    <li v-for="item in activeItems" :key="item.id" class="work-item">
      <GlAvatar
        :entity-name="item.company"
        :entity-id="item.id"
        :size="48"
        shape="rect"
        class="work-item__avatar"
      />

      <div class="work-item__body">
        <h2 class="work-item__position">{{ item.position }}</h2>

        <ul class="work-item__meta text-subtle">
          <li>
            <GlIcon name="organization" :size="14" />
            {{ item.company }}
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

        <p class="work-item__description">{{ item.description }}</p>

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

export default {
  components: { GlAvatar, GlBadge, GlIcon },

  props: {
    workList: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    activeItems() {
      return this.workList.filter((item) => item.isActive)
    },
  },
}
</script>

<style scoped>
.work-item__avatar {
  flex-shrink: 0;
}

.work-item__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}

.work-item__position {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gl-text-color-heading);
}

.work-item__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
}

.work-item__meta li {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.work-item__description {
  white-space: pre-line;
  max-width: 48rem;
}

.work-list__empty {
  padding: 1rem 0;
}
</style>
