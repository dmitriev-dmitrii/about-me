<template class="">

<div class="experience block-border-bottom  ">

  <h2 id="experience" class="title">Опыт работы</h2>

  <div class="experience__list contanier">
    <WorkItem :item=item v-for="item in workList" :key="item.id"></WorkItem>
  </div>

</div>

</template>

<script>

import WorkItem from "~/components/pages/home/WorkItem.vue";

export default {
  components: {WorkItem},

  data:()=>{
    return {
      workList:[]
    }
  },

  fetch() {
    this.workList =  [...this.$store.state.work.list].reverse();
  },



}

</script>

<style>

.experience >.title {
  text-align: center;
}

.experience__list{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>