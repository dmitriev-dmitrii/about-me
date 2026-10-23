<template>
  <ul class="row-list">
    <ProjectItem v-for="item in projects" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import ProjectItem from '~/components/projects/ProjectItem.vue'

export default {
  components: { ProjectItem },

  computed: {
    projects() {
      return [...this.$store.state.projects.projectsList].filter((item) => item.isActive).reverse()
    },
  },
}
</script>
