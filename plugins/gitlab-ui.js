// GitLab UI: https://gitlab.com/gitlab-org/gitlab-ui
// Глобальная конфигурация должна быть задана до использования любых компонентов.
import setConfigs from '@gitlab/ui/dist/config'

setConfigs()

// Тема следует системной настройке: тёмная тема GitLab UI включается классом gl-dark на <html>
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
const applyTheme = () => document.documentElement.classList.toggle('gl-dark', darkQuery.matches)

applyTheme()
darkQuery.addEventListener('change', applyTheme)
