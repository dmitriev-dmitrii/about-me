<template>
  <div class="skills">

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
        <SvgIcon name="js"></SvgIcon> JS
      </div>
      <div class="skills__item">
      <SvgIcon name="gulp"></SvgIcon>    Gulp
      </div>
      <div class="skills__item">
      <SvgIcon name="webpack"></SvgIcon> Webpack
      </div>

      <div class="skills__item">
  <SvgIcon name="vuejs"></SvgIcon> VueJS
  </div>


    </div>
  </div>

</template>


<script>



</script>



<style lang="scss">

.skills{
  background: var(--bg-color2);
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.skills__item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 7px;
  margin: 1rem;
  background: var(--bg-color);
  width: 120px;
}
.skills__item {
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03), 0 1px 2px rgba(102, 119, 136, 0.3);
  color: $titleTxtColor;
  border: 1px solid #efefef;
}
.skills__item .svg-icon
{
height: 3em;
width: 3em;

stroke:transparent;
fill: currentColor;

}



</style>