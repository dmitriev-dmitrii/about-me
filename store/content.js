/*
 * Опыт работы и пет-проекты — из файла about-me.json в публичном GitHub Gist:
 * https://gist.github.com/dmitriev-dmitrii/e4742f218539795b2823f7a57d9feee1
 * Чтобы обновить сайт, достаточно отредактировать gist. Ссылка без хеша коммита
 * всегда отдаёт последнюю версию; GitHub кэширует её до 5 минут.
 *
 * Формат about-me.json:
 * {
 *   "work": [{
 *     "company": "4People",
 *     "companyUrl": "https://…",          // необязательно
 *     "position": "Frontend-разработчик (Vue)",
 *     "period": "Март 2023 — настоящее время",
 *     "duration": "3 года 8 месяцев",
 *     "about": "о компании",
 *     "project": { "name": "…", "description": "…", "url": "https://…" },  // url необязателен
 *     "role": "роль и команда",
 *     "achievements": ["что сделал", …],
 *     "stack": ["Vue 3", …]
 *   }],
 *   "projects": [{
 *     "name": "we-meet",
 *     "description": "…",
 *     "demo": "https://…",                // сайт / демо, необязательно
 *     "source": "https://gitlab.com/…",   // исходный код: строка или массив ссылок, необязательно
 *     "stack": ["Vue 3", …]
 *   }]
 * }
 * Картинка пет-проекта берётся из static/img/portfolio/<name в нижнем регистре>.png, если она есть.
 */
import { slugify, toRepository } from '~/utils/links'

export const CONTENT_URL =
  'https://gist.githubusercontent.com/dmitriev-dmitrii/e4742f218539795b2823f7a57d9feee1/raw/about-me.json'

export const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

const isValidContent = (data) =>
  Boolean(data && Array.isArray(data.work) && Array.isArray(data.projects))

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
      about: item.about,
      project: item.project || {},
      role: item.role,
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
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data = await response.json()
      if (!isValidContent(data)) throw new Error('Некорректный about-me.json')
      commit('SET_CONTENT', data)
      commit('SET_STATUS', STATUS.SUCCESS)
    } catch (error) {
      console.error('[content] не удалось загрузить about-me.json:', error.message)
      commit('SET_STATUS', STATUS.ERROR)
    }
  },
}
