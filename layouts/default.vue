<template>
  <div class="default-layout">
    <AppHeader />
    <main class="default-layout__main">
      <nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/global/layout/AppHeader.vue'
import AppFooter from '~/components/global/layout/AppFooter.vue'

export default {
  components: { AppFooter, AppHeader },
}
</script>

<style scoped>
.default-layout {
  min-height: calc(100vh + 1px);
  min-height: calc(100dvh + 1px);
  display: flex;
  flex-direction: column;
}

.default-layout__main {
  flex: 1;
  padding: 2rem 0 3rem;
}
</style>
