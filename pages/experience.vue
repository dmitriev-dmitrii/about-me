<template>
  <div class="experience container">
    <header class="experience__header">
      <h1 class="page-title">Опыт</h1>

      <p class="text-subtle">
        с {{ experience }} года в коммерческой разработке, а ещё пет-проекты.
      </p>
    </header>

    <ContentState>
      <GlTabs :value="activeTab" @input="onTabChange">
        <GlTab
          v-for="tab in tabs"
          :key="tab.id"
          :title="tab.label"
          :tab-count="tab.count"
          :tab-count-sr-text="`${tab.label}: ${tab.count}`"
        >
          <WorkList v-if="tab.routeParamKey === 'works'" :work-list="workList" />
          <ProjectsList v-else-if="tab.routeParamKey === 'projects'" :projects="projects" />
        </GlTab>
      </GlTabs>
    </ContentState>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContentState from '~/components/global/ContentState.vue'
import { PROFILE } from '~/constants/profile'
import GlTab from '@gitlab/ui/dist/components/base/tabs/tab/tab'
import GlTabs from '@gitlab/ui/dist/components/base/tabs/tabs/tabs'
import WorkList from '~/components/experience/WorkList.vue'
import ProjectsList from '~/components/projects/ProjectsList.vue'

// routeParamKey — значение в адресе: /experience?tab=projects (у первой вкладки параметра нет)
const TABS = [
  {
    id: 0,
    label: 'Опыт работы',
    routeParamKey: 'works',
  },
  {
    id: 1,
    label: 'Пет-проекты',
    routeParamKey: 'projects',
  },
]

export default {
  components: { ContentState, GlTab, GlTabs, WorkList, ProjectsList },

  data: () => ({
    experience: PROFILE.startCarrierYear,
  }),

  computed: {
    ...mapGetters('content', ['workList', 'projects']),

    tabs() {
      const counts = { works: this.workList.length, projects: this.projects.length }
      return TABS.map((tab) => ({ ...tab, count: counts[tab.routeParamKey] }))
    },

    // активная вкладка берётся из адреса (поэтому ссылка «Опыт» в шапке открывает первую вкладку);
    // это позиция вкладки — GlTabs работает с индексами, а не с id
    activeTab() {
      const index = TABS.findIndex(({ routeParamKey }) => routeParamKey === this.$route.query.tab)
      return Math.max(index, 0)
    },
  },

  methods: {
    onTabChange(index) {
      if (index === this.activeTab) return
      const tab = TABS[index]
      this.$router.replace({ query: index === 0 ? {} : { tab: tab.routeParamKey } })
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
