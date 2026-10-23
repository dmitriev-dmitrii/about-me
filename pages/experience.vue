<template>
  <div class="experience container">
    <header class="experience__header">
      <h1 class="page-title">Опыт</h1>
      <p class="text-subtle">Коммерческая разработка и пет-проекты.</p>
    </header>

    <GlTabs :value="activeTab" @input="onTabChange">
      <GlTab
        title="Опыт работы"
        :tab-count="workList.length"
        :tab-count-sr-text="`Мест работы: ${workList.length}`"
      >
        <WorkList :work-list="workList" />
      </GlTab>
      <GlTab
        title="Пет-проекты"
        :tab-count="projectsCount"
        :tab-count-sr-text="`Проектов: ${projectsCount}`"
      >
        <ProjectsList />
      </GlTab>
    </GlTabs>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import GlTab from '@gitlab/ui/dist/components/base/tabs/tab/tab'
import GlTabs from '@gitlab/ui/dist/components/base/tabs/tabs/tabs'
import WorkList from '~/components/experience/WorkList.vue'
import ProjectsList from '~/components/projects/ProjectsList.vue'

// активная вкладка хранится в адресе: /experience?tab=projects
const TABS = ['work', 'projects']

export default {
  components: { GlTab, GlTabs, WorkList, ProjectsList },

  computed: {
    activeTab() {
      return Math.max(TABS.indexOf(this.$route.query.tab), 0)
    },
    ...mapState('work', ['workList']),
    projectsCount() {
      return this.$store.state.projects.projectsList.filter((item) => item.isActive).length
    },
  },

  created() {
    this.fetchWorkData()
  },

  methods: {
    ...mapActions('work', ['fetchWorkData']),

    onTabChange(index) {
      if (index === this.activeTab) return
      const tab = TABS[index]
      this.$router.replace({ query: tab === TABS[0] ? {} : { tab } })
    },
  },
}
</script>

<style scoped>
.experience__header {
  margin-bottom: 1rem;
}

.experience__header .text-subtle {
  margin-top: 0.25rem;
}
</style>
