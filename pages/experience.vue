<template>
  <div class="experience container">
    <h1 class="title text-center">Про Опыт</h1>

    <div v-if="isLoading">loading</div>
    <div v-else class="">
      <h2 class="title">пет проекты</h2>
      <PortfolioList />
      <h2 class="title">опыт работы</h2>
      <p class="text-center">
        здесь можно прочесть подробнее о моем опыте - не только в it, но и других сферах.
      </p>
      <AppFilterTabs v-model="currentTabFilterValue" :options="options" />
      <WorkList :work-list="$store.state.work.workList" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import WorkList from '../components/experience/WorkList.vue'
import AppFilterTabs from '~/components/global/AppFilterTabs.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'

const WORK_TAB_FILTERS_OPTIONS = [
  { value: 0, label: 'только it' },
  { value: 1, label: 'все места работ' },
]

export default {
  components: {
    PortfolioList: ProjectsList,
    AppFilterTabs,
    WorkList,
  },
  data: () => {
    return {
      isLoading: false,
      currentTabFilterValue: 0,
      options: WORK_TAB_FILTERS_OPTIONS,
    }
  },
  methods: {
    ...mapActions('work', ['fetchWorkData']),
  },
  watch: {
    currentTabFilterValue(val) {
      console.log(val)
    },
  },
  created() {
    this.fetchWorkData()
  },
}
</script>
