<template>
  <div class="default-layout">
    <AppHeader />
    <main>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
main {
  flex: 1;
  padding: 2rem 1rem;
  background-color: var(--bg-color2);
}
</style>
