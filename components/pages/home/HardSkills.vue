<template>
<div class="skills block-border-bottom">
    <h2 class="title">Технологии, инструменты</h2>
    <div class="contanier">
      <div class="skills__list">
        <div class="skills__item"><svg-icon name="html5"></svg-icon> Html  </div>
        <div class="skills__item"><svg-icon name="css"></svg-icon> Scss/postCss</div>
        <div class="skills__item"> <svg-icon name="js" />JS </div>
        <div class="skills__item"><svg-icon name="gulp"/>    Gulp</div>
        <div class="skills__item"><svg-icon name="webpack"/> Webpack</div>
        <div class="skills__item">  <svg-icon name="nodejs"/> NodeJS</div>
        <div class="skills__item"><svg-icon name="vuejs"/> VueJS/Nuxt</div>
    </div>
  </div>
</div>

</template>


<script>



</script>



<style lang="scss">

.skills{
  background: $bgColor2;
  width: 100%;
}
.skills .title
{
  text-align: center;
}

.skills{
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
     // 2cards
  $cards:2;
  width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
  margin: $base-margin ;
  @media (min-width: 413.98px){
  $cards:3;
  width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
  }
  @media (min-width: 575.98px){
  $cards:4;
  width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
  }
  @media (min-width: 767.98px){
  $cards:6;
  width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
  }
  @media (min-width: 991.98px){
  $cards:7;
  width:calc( ( 100% - $base-margin * ($cards * 2) )  / $cards ) ;
  }
}
  }


.skills__item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1em;
  border-radius: .7rem;
  box-shadow: 0 0 .5rem .01rem currentColor;
  background-color:$bgColor1;


}
.skills__item {
  color: $titleTxtColor;
}
.skills__item .icon
{
height: 3em;
width: 3em;

stroke:transparent;
fill: currentColor;

}


</style>