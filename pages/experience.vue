<template>
  <div class="experience container">
    <header class="experience__header">
      <h1 class="page-title">Опыт</h1>
      <p class="text-subtle">{{ experience }} в коммерческой разработке, а ещё пет-проекты.</p>
    </header>

    <ContentState>
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
          :tab-count="projects.length"
          :tab-count-sr-text="`Проектов: ${projects.length}`"
        >
          <ProjectsList :projects="projects" />
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

// активная вкладка хранится в адресе: /experience?tab=projects
const TABS = ['work', 'projects']

export default {
  components: { ContentState, GlTab, GlTabs, WorkList, ProjectsList },

  data: () => ({
    experience: PROFILE.experience,
  }),

  computed: {
    activeTab() {
      return Math.max(TABS.indexOf(this.$route.query.tab), 0)
    },
    ...mapGetters('content', ['workList', 'projects']),
  },

  methods: {
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
