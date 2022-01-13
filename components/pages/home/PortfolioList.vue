
<template>
  <div class="portfolio  block-border-bottom">
    <h2 id="portfolio" class="title">Портфолио</h2>
    <div class="contanier">
    <div class="portfolio__list  ">
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

.portfolio {

  $base-margin:1rem;
  $cards:1;
  // количество карточек при медиазапросе

&__list{
  display: flex;
  flex-wrap: wrap;
  margin-left: - $base-margin ;
  margin-right: - $base-margin ;
}

&__item {
  $cards:1;
  // 1card
  margin: $base-margin auto;
  width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;

  max-width: 35rem;

  @media (min-width: 575.98px)
  { 
    // 2cards
    $cards:2;
    width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
    margin: $base-margin ;
    // получаем такой код
    // width:calc( ( 100% - 4rem )  / 2 ) ;
    // margin: 1rem ;
    max-width: none;
  }

  @media (min-width: 767.98px)
    {
      $cards:3;
      // 3cards
      width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
    } 
  }
}


</style>
