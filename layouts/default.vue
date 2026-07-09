<template>
  <div class="defalut-layout">
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

<style></style>
