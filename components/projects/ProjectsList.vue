<template>
  <div class="portfolio">
    <div class="container">
      <div class="portfolio__list">
        <PortfolioItem v-for="item in portfolioList" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/projects/ProjectItem.vue'

export default {
  components: {
    PortfolioItem: ProjectItem,
  },
  data: () => {
    return {
      portfolioList: [],
    }
  },

  fetch() {
    this.portfolioList = [...this.$store.state.projects.projectsList].reverse()
  },

  // mounted :function (){
  // console.log(this.$store.state.portfolio.list);
  // }
}
</script>

<style>
.portfolio {
  width: 100%;
}

.portfolio__list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
}

.portfolio__item {
  margin: 1rem auto;
  width: calc(100% - 2rem);
  max-width: 35rem;
}

@media (min-width: 575.98px) {
  .portfolio__item {
    width: calc((100% - 4rem) / 2);
    margin: 1rem;
    max-width: none;
  }
}

@media (min-width: 767.98px) {
  .portfolio__item {
    width: calc((100% - 6rem) / 3);
    margin: 1rem;
  }
}
</style>
