// Подтягиваем опыт работы и пет-проекты из gist при открытии сайта
export default ({ store }) => {
  store.dispatch('content/fetchContent')
}
