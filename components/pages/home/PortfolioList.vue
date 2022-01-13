
<template>
  <div class="portfolio  block-border-bottom">
    <h2 id="portfolio" class="title">Портфолио</h2>
<div class="contanier">
    <div class="portfolio__list ">
      <PortfolioItem />
      <PortfolioItem /> 
      <PortfolioItem />
      <PortfolioItem /> 
    </div>
</div>
  </div>
</template>

<script>
import PortfolioItem from '@/components/pages/home/PortfolioItem'

export default {
components:{
  PortfolioItem
}

};
</script>

<style lang="scss">
.portfolio .title {
  text-align: center;
}
.portfolio {
  background: $bgColor1;
  width: 100%;
}
.portfolio__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
@supports  (gap:1em) {
  gap:1em;
  }
}
</style>
