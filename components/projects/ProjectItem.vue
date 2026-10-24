<template>
  <li class="project-item">
    <a
      v-if="preview"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="project-item__preview"
    >
      <img :src="preview" :alt="`Скриншот ${item.title}`" loading="lazy" />
    </a>
    <GlAvatar
      v-else
      :entity-name="item.title"
      :entity-id="item.id"
      :size="64"
      shape="rect"
      class="project-item__avatar"
    />

    <div class="project-item__body">
      <h2 class="project-item__title">
        <GlLink v-if="item.link" :href="item.link" target="_blank">{{ item.title }}</GlLink>
        <template v-else>{{ item.title }}</template>
      </h2>
      <p v-if="item.description" class="text-subtle">{{ item.description }}</p>

      <div class="badge-list">
        <GlBadge v-for="tech in item.stack" :key="tech">{{ tech }}</GlBadge>
      </div>
    </div>

    <div class="project-item__actions">
      <GlButton
        v-for="repo in item.repositories"
        :key="repo.url"
        :icon="repo.icon"
        :href="repo.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ item.repositories.length > 1 ? repo.name : 'Исходный код' }}
      </GlButton>
      <GlButton
        v-if="item.link"
        variant="confirm"
        icon="external-link"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Сайт
      </GlButton>
    </div>
  </li>
</template>

<script>
import GlAvatar from '@gitlab/ui/dist/components/base/avatar/avatar'
import GlBadge from '@gitlab/ui/dist/components/base/badge/badge'
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'

export default {
  components: { GlAvatar, GlBadge, GlButton, GlIcon, GlLink },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    siteLabel() {
      return this.item.link.replace(/^https?:\/\//, '').replace(/\/$/, '')
    },
    // image — полная ссылка на картинку или имя файла из static/img/portfolio (без .png)
    preview() {
      const { image } = this.item
      if (!image) return null
      if (/^https?:\/\//.test(image)) return image
      try {
        return require(`~/static/img/portfolio/${image}.png`)
      } catch (e) {
        return null
      }
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

.project-item__avatar {
  flex-shrink: 0;
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
  flex-wrap: wrap;
  justify-content: flex-end;
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
