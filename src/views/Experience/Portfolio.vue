
<template>
  <div class="portfolio">
    <h2 id="experience" class="title">Портфолио</h2>
<div class="contanier">
    <div class="portfolio__list ">
      <PortfolioItem />
      <PortfolioItem /> 
            <PortfolioItem />
      <PortfolioItem /> 
            <PortfolioItem />
      <PortfolioItem /> 
    </div>
</div>
  </div>
</template>

<script>
import PortfolioItem from "@/views/Experience/PortfolioItem.vue";

export default {
  components: {
    PortfolioItem,
  },
};
</script>

<style lang="scss">
.portfolio .title {
  text-align: center;
}
.portfolio {
  background: var(--bg-color);
  width: 100%;
}
.portfolio__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  

@supports  (gap:1em) {
gap:1em
}
}
</style>
