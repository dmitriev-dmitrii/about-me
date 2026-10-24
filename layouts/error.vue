<template>
  <div class="error-page container">
    <p class="error-page__code">{{ error.statusCode }}</p>
    <h1 class="error-page__title">{{ title }}</h1>
    <p v-if="error.statusCode !== 404" class="text-subtle">{{ error.message }}</p>
    <div class="error-page__actions">
      <GlButton variant="confirm" icon="home" to="/">На главную</GlButton>
      <GlButton icon="mail" to="/contacts">Связаться</GlButton>
    </div>
  </div>
</template>

<script>
import GlButton from '@gitlab/ui/dist/components/base/button/button'

export default {
  components: { GlButton },
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 500, message: 'Unexpected Error' }),
    },
  },
  computed: {
    title() {
      return this.error.statusCode === 404 ? 'Страница не найдена' : 'Что-то пошло не так'
    },
  },
}
</script>

<style scoped>
.error-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.error-page__code {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--gl-text-color-heading);
}

.error-page__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gl-text-color-heading);
}

.error-page__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style>
