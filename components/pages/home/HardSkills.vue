<template>
  <div class="skills block-border-bottom">
    <h2 class="title">Технологии, инструменты</h2>
    <div class="skills__list contanier">
        
      <div class="skills__item">
        <SvgIcon name="html5"></SvgIcon>
        Html   
      </div>
          
      <div class="skills__item">
        <SvgIcon name="css"></SvgIcon>
      Scss/postCss
      </div>
      <div class="skills__item">
        <svg-icon name="js" />JS 
      </div>
      <div class="skills__item">
      <svg-icon name="gulp"/>    Gulp
      </div>
      <div class="skills__item">
      <svg-icon name="webpack"/> Webpack
      </div>
      <div class="skills__item">
        <svg-icon name="nodejs"/> NodeJS
      </div>
      <div class="skills__item">
      <svg-icon name="vuejs"/> VueJS/Nuxt
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
  padding: 0.5rem 0;
  margin-top: 1rem;
}
.skills .title
{
  text-align: center;
}
.skills__list {
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-wrap: wrap;
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
  background:$bgColor1;

  width: 12rem;
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