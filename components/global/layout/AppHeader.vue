<template>
  <header class="header block-border-bottom">
    <nav id="nav" class="nav container">
      <ul class="nav__list">
        <li class="nav__item">
          <NuxtLink class="underline" to="/">Обо мне</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink class="underline" to="/experience">Опыт</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink class="underline" to="/projects">Проекты</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink class="underline" to="/contacts">Контакты</NuxtLink>
        </li>
        <li class="nav__item"><DarkThemeToggle /></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import DarkThemeToggle from '~/components/global/layout/DarkThemeToggle.vue'
export default {
  components: {
    DarkThemeToggle,
  },
}
</script>
<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__list {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 767.98px) {
  .nav__list {
    justify-content: flex-end;
  }
}

.nav__item {
  font-size: 0.9em;
  margin: 0 1rem;
}

.nav__item:last-child {
  margin-right: 0;
}

.nav__item label {
  padding: 0.5rem 0.2rem;
}

.nav__item a {
  font-weight: 300;
  color: var(--main-text-color);
  cursor: pointer;
}

@media (min-width: 767.98px) {
  .nav__item a:hover {
    background-size: 100% 0.3rem;
  }
}
</style>
