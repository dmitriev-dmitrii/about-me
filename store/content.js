import { slugify, toRepository } from '~/utils/links'

export const CONTENT_URL =
  'https://gist.githubusercontent.com/dmitriev-dmitrii/e4742f218539795b2823f7a57d9feee1/raw/about-me.json'

// редакитировать контент
// https://gist.github.com/dmitriev-dmitrii/e4742f218539795b2823f7a57d9feee1/edit

export const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const state = () => ({
  status: STATUS.LOADING,
  work: [],
  projects: [],
})

export const getters = {
  isLoading: ({ status }) => status === STATUS.LOADING,
  isError: ({ status }) => status === STATUS.ERROR,

  workList({ work }) {
    return work.map((item, index) => ({
      id: index + 1,
      company: item.company,
      companyUrl: item.companyUrl,
      position: item.position,
      period: item.period,
      duration: item.duration,
      project: item.project || {},
      achievements: item.achievements || [],
      stack: item.stack || [],
    }))
  },

  projects({ projects }) {
    return projects.map((item, index) => ({
      id: index + 1,
      title: item.name,
      description: item.description,
      link: item.demo,
      repositories: []
        .concat(item.source || [])
        .filter(Boolean)
        .map(toRepository),
      image: slugify(item.name),
      stack: item.stack || [],
    }))
  },
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SET_CONTENT(state, { work, projects }) {
    state.work = work
    state.projects = projects
  },
}

export const actions = {
  async fetchContent({ commit }) {
    commit('SET_STATUS', STATUS.LOADING)
    try {
      const response = await fetch(CONTENT_URL)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const data = await response.json()

      commit('SET_CONTENT', data)
      commit('SET_STATUS', STATUS.SUCCESS)
    } catch (error) {
      console.error('[content] не удалось загрузить about-me.json:', error.message)
      commit('SET_STATUS', STATUS.ERROR)
    }
  },
}
