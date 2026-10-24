<template>
  <GlAlert
    v-if="isError"
    variant="danger"
    :dismissible="false"
    title="Не удалось загрузить данные"
    primary-button-text="Повторить"
    class="content-state"
    @primary-action="fetchContent"
  >
    Проверьте подключение к интернету и попробуйте ещё раз.
  </GlAlert>

  <div v-else-if="isLoading" class="content-state" aria-busy="true" aria-label="Загрузка">
    <GlSkeletonLoader
      v-for="n in blocks"
      :key="n"
      :lines="lines"
      :width="640"
      class="content-state__block"
    />
  </div>

  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GlAlert from '@gitlab/ui/dist/components/base/alert/alert'
import GlSkeletonLoader from '@gitlab/ui/dist/components/base/skeleton_loader/skeleton_loader'

// Обёртка над контентом из gist: скелетон при загрузке, ошибка с кнопкой «Повторить»
export default {
  components: { GlAlert, GlSkeletonLoader },

  props: {
    blocks: {
      type: Number,
      default: 3,
    },
    lines: {
      type: Number,
      default: 3,
    },
  },

  computed: {
    ...mapGetters('content', ['isLoading', 'isError']),
  },

  methods: {
    ...mapActions('content', ['fetchContent']),
  },
}
</script>

<style scoped>
.content-state__block {
  display: block;
  width: 100%;
  max-width: 40rem;
  height: auto;
}

.content-state__block + .content-state__block {
  margin-top: 2rem;
}
</style>
