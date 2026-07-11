export const state = () => ({
  workList: [],
})

export const getters = {
  // allWork: (state) => state.workList,
}

export const mutations = {
  UPDATE_WORK_LIST(state, data) {
    state.workList = data
  },
}

export const actions = {
  async fetchWorkData({ commit }) {
    try {
      const data = [
        {
          id: 1,
          isActive: true,
          company: 'ООО Ромашки (NDA)',
          position: 'Frontend-разработчик',
          period: 'Март 2023 — Июнь 2026',
          duration: '3 года 4 месяца',
          description:
            'Разработка логики для клиентской части сайта. Платформа состоит из микрофронтов, адаптируемых под кастомную логику, бренд и страну, каждая часть имеет свою команду разработки.\n\n— Разработал функционал для международной платформы на основе микрофронтов, создав универсальные решения для нескольких брендов и стран.\n— Участвовал в миграции проектов с Nuxt 2 на Nuxt 3.\n— Обеспечивал взаимодействие с Headless CMS Directus.',
          stack: ['nuxt 2', 'nuxt 3', 'js', 'ts', 'node js'],
        },
        {
          id: 2,
          isActive: true,
          company: 'ImageSpark',
          position: 'Frontend-разработчик',
          period: 'Март 2022 — Февраль 2023',
          duration: '1 год',
          description:
            "Работа над платформой онлайн обучения 'Сбер-Университет'. Писал фронт для клиентской части, админки и разрабатывал собственную UI библиотеку.\n\n— Разработал компоненты на Vue2 с использованием Vuetify и Element-UI, занимался версткой.\n— Внедрил Storybook для документирования и разработки UI-компонентов.\n— Писал unit-тесты (Jest), работал с Docker, взаимодействовал с бэкендом и QA.\n— Участвовал в оценке сроков выполнения задач, работал по SCRUM.",
          stack: ['Vue2', 'Vuetify', 'Element-UI', 'Storybook', 'Jest', 'Docker'],
        },
        {
          id: 3,
          isActive: true,
          company: 'BMS Group',
          position: 'JavaScript-разработчик',
          period: 'Ноябрь 2021 — Февраль 2022',
          duration: '4 месяца',
          description:
            'Разработка проектов на стеке Vue 2 и Nuxt, интеграция с бэкендом.\n\n— Разрабатывал фронтенд на Vue 2, Nuxt.\n— Писал backend на NodeJS (express).\n— Работал с MongoDB.\n— Верстал по шаблонам из Figma.\n— Взаимодействовал с командой разработки и проектным менеджером.',
          stack: ['Vue 2', 'Nuxt', 'NodeJS (express)', 'MongoDB', 'Figma'],
        },
        {
          id: 4,
          isActive: true,
          company: 'ООО Артис',
          position: 'Верстальщик',
          period: 'Сентябрь 2020 — Октябрь 2021',
          duration: '1 год 2 месяца',
          description:
            "Единственный фронтенд-разработчик в команде. Верстка, разработка нового функционала и миграция проектов.\n\n— Верстал по шаблонам из Figma.\n— Написал новый функционал на Vue.js.\n— Мигрировал проекты с JQ на Vue2.\n— 'Натягивал' фронтенд на PHP код.\n— Работал в команде с бэкенд-разработчиком.",
          stack: ['JQ', 'Vue2', 'PHP', 'Figma'],
        },
      ]

      commit('UPDATE_WORK_LIST', data)
    } catch (error) {}
  },
}
