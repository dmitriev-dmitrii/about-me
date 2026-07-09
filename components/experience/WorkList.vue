<template class="">
  <div class="experience block-border-bottom">
    <h2 id="experience" class="title">Опыт работы</h2>

    <div class="experience__list container">
      <WorkItem v-for="item in workList" :key="item.id" :item="item"></WorkItem>
    </div>
  </div>
</template>

<script>
import WorkItem from './WorkItem.vue'

export default {
  components: { WorkItem },

  data: () => {
    return {
      workList: [],
    }
  },

  fetch() {
    this.workList = [...this.$store.state.work.list].reverse()
  },
}
</script>

<style>
.experience > .title {
  text-align: center;
}

.experience__list {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}
</style>
