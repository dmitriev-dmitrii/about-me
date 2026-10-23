<template>
  <li class="project-item">
    <a :href="item.link" target="_blank" rel="noopener noreferrer" class="project-item__preview">
      <img :src="preview" :alt="`Скриншот ${item.title}`" loading="lazy" />
    </a>

    <div class="project-item__body">
      <h2 class="project-item__title">
        <GlLink :href="item.link" target="_blank">{{ item.title }}</GlLink>
      </h2>
      <p class="text-subtle">{{ item.description }}</p>
      <div class="badge-list">
        <GlBadge v-for="tech in item.stack" :key="tech">{{ tech }}</GlBadge>
      </div>
    </div>

    <div class="project-item__actions">
      <GlButton
        icon="github"
        size="small"
        :href="item.linkGit"
        target="_blank"
        rel="noopener noreferrer"
      >
        Код
      </GlButton>
      <GlButton
        icon="external-link"
        size="small"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Демо
      </GlButton>
    </div>
  </li>
</template>

<script>
import GlBadge from '@gitlab/ui/dist/components/base/badge/badge'
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlLink from '@gitlab/ui/dist/components/base/link/link'

export default {
  components: { GlBadge, GlButton, GlLink },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    preview() {
      return require(`~/static/img/portfolio/${this.item.imgName}.png`)
    },
  },
}
</script>

<style scoped>
.project-item {
  align-items: flex-start;
}

.project-item__preview {
  flex-shrink: 0;
  width: 8rem;
  aspect-ratio: 16 / 10;
  border: 1px solid var(--gl-border-color-default);
  border-radius: var(--gl-border-radius-default, 0.25rem);
  overflow: hidden;
  background-color: var(--gl-background-color-subtle);
}

.project-item__preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.2s ease;
}

.project-item__preview:hover img {
  transform: scale(1.05);
}

.project-item__body {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
  min-width: 0;
}

.project-item__title {
  font-size: 1rem;
  font-weight: 600;
}

.project-item__actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

@media (max-width: 575.98px) {
  .project-item {
    flex-wrap: wrap;
  }

  .project-item__preview {
    width: 6rem;
  }

  .project-item__actions {
    width: 100%;
  }
}
</style>
