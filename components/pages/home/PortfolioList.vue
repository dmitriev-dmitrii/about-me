
<template>
  <div class="portfolio  block-border-bottom">
    <h2 id="portfolio" class="title">Портфолио</h2>
    <div class="contanier">
      <div class="portfolio__list ">
        <PortfolioItem :item=item v-for="item in portfolioList" :key="item.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioItem from '@/components/pages/home/PortfolioItem'

export default {
  data:()=>{
    return {
      portfolioList:[]
    }
  },
components:{
  PortfolioItem
  },

  fetch() {
    this.portfolioList =  [...this.$store.state.portfolio.list].reverse();
  },

  // mounted :function (){
  // console.log(this.$store.state.portfolio.list);
  // }
};

</script>

<style>
.portfolio .title {
  text-align: center;
}
.portfolio {
  background-color: var(--bg-color1);
  width: 100%;
}

.portfolio__list{
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem ;
  margin-right: -1rem ;
}

.portfolio__item {
  margin: 1rem auto;
  width:calc( 100% - 2rem ) ;

  max-width: 35rem;
}

@media (min-width: 575.98px)
  { 
    .portfolio__item {
    width:calc( ( 100% - 4rem )  / 2 ) ;
    margin: 1rem ;
    max-width: none;
    }
  }

@media (min-width: 767.98px)
    {
      .portfolio__item {
      width:calc( ( 100% - 6rem )  / 3 ) ;
      margin: 1rem ;
      }
    }

</style>
