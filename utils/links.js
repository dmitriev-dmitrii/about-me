const REPO_HOSTS = [
  { host: 'github.com', name: 'GitHub', icon: 'github' },
  { host: 'gitlab.com', name: 'GitLab', icon: 'tanuki' },
]

export const stripProtocol = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

// Ссылка на исходный код -> { url, label, name, icon } для кнопки
export const toRepository = (url) => {
  const known = REPO_HOSTS.find(({ host }) => url.includes(host))
  return {
    url,
    label: stripProtocol(url),
    name: known ? known.name : stripProtocol(url).split('/')[0],
    icon: known ? known.icon : 'code',
  }
}

// 'Poland-Travel' -> 'poland-travel' (имя картинки в static/img/portfolio)
export const slugify = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
