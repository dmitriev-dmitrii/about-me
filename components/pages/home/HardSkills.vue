<template>
  <div class="skills block-border-bottom">
    <h2 class="title">Технологии, инструменты</h2>
    <div class="container">
      <div class="skills__list">
        <div class="skills__item"><SvgIcon name="html5" /> Html</div>
        <div class="skills__item"><SvgIcon name="css" /> Scss</div>
        <div class="skills__item"><SvgIcon name="js" />JS</div>
        <div class="skills__item"><SvgIcon name="gulp" />Gulp</div>
        <div class="skills__item"><SvgIcon name="webpack" /> Webpack</div>
        <div class="skills__item"><SvgIcon name="nodejs" /> NodeJS</div>
        <div class="skills__item"><SvgIcon name="vuejs" /> VueJS/Nuxt</div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.skills {
  background: var(--bg-color2);
  width: 100%;
}

.skills .title {
  text-align: center;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.625rem;
  margin-right: -0.625rem;
}

.skills__item {
  width: calc((100% - 2.5rem) / 2);
  margin: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.3125rem;
  margin-bottom: 1em;
  border-radius: 0.4375rem;
  box-shadow: 0 0 0.3125rem 0.0063rem currentColor;
  background-color: var(--bg-color1);
  color: var(--title-text-color);
}

@media (min-width: 413.98px) {
  .skills__item {
    width: calc((100% - 3.75rem) / 3);
  }
}

@media (min-width: 575.98px) {
  .skills__item {
    width: calc((100% - 5rem) / 4);
  }
}

@media (min-width: 767.98px) {
  .skills__item {
    width: calc((100% - 7.5rem) / 6);
  }
}

@media (min-width: 991.98px) {
  .skills__item {
    width: calc((100% - 8.75rem) / 7);
  }
}

.skills__item .icon {
  height: 3em;
  width: 3em;
  stroke: transparent;
  fill: currentColor;
}
</style>
