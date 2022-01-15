
<template>

      <div class="portfolio__item">
        
        <a class="portfolio__site-link" target="blank" :href="item.link">

          <div class="portfolio__title-wrapper">
            <h3 class="portfolio__title title">{{item.title}}</h3>
            <span class="portfolio__subtitle">{{item.description}}</span>
          </div>
          <nuxt-picture class="portfolio__img" :src="`portfolio/${item.imgName}.png`"  :alt="item.imgName+'-image'" />

        </a>

        <ul class="portfolio__item-about-list block-border-bottom">
          <li class="portfolio__item-about" v-for="stackElement in item.stack" :key="stackElement">{{stackElement}}</li>
        </ul>

        <a class="portfolio__git-link " target="blank" :href="item.linkGit">
          <svg-icon name="github"></svg-icon> Код на GitHub 
        </a>
      
      </div>

</template>

<script>


export default{
  props:{
    item:{
        type: Object,
        required: true,
    }
  }
}
</script>


<style lang="scss">


.portfolio__item 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .05rem .3rem .1rem rgba(197, 197, 197, 0.5);
  border-radius: .7rem;
  overflow: hidden;

  background:$bgColor2;

  color: white;

  transition: all .2s ease;

&:focus-within
{
      box-shadow:  0 0 0 0 transparent;
}

}

.portfolio__site-link 
{
height: 25rem;
width: 100%;

position: relative;

border:0 ;
border-bottom:.5rem solid ;
border-image: $lg 5;

overflow: hidden;
transition: all .2s linear;
&:focus{
border:.5rem solid $mainAccentColor;
outline: none;
}
}


.portfolio__site-link.portfolio__site-link:hover .portfolio__title,
.portfolio__site-link.portfolio__site-link:focus .portfolio__title
{

color: $linkTxtColor;
text-decoration: underline currentColor;
text-shadow: 2px 2px 1px #2c3dce;
}

.portfolio__site-link.portfolio__site-link:hover .portfolio__img,
.portfolio__site-link.portfolio__site-link:focus .portfolio__img
{
filter: brightness(25%);
}

.portfolio__title-wrapper
{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;

  padding: 1.5rem ;
  width: 100%;
  height: 100%;

  font-weight: bold;

  display: flex;
  flex-direction: column;

  background: linear-gradient(15deg, rgba(0, 0, 0, 0.9)30%, transparent ) ;

  justify-content: flex-end;
  align-items: flex-end;
}

.portfolio__title,.portfolio__subtitle 
{
  // color: inherit;
  transition: all 0.2s ease;
}

.portfolio__title 
{
  text-decoration: underline transparent;
  font-size: 1.1em;
  margin-bottom: 1rem;

  align-self: flex-start;

}

.portfolio__subtitle 
{
font-size: .7em;
align-self: flex-end;
align-self: flex-start;
}

.portfolio__img
{
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;

  min-height: 100%;
  height: auto;
  transition: all 0.2s ease;
  background: #000;
  // filter: brightness(20%);

}

.portfolio__item-about-list 

{
background-color: $bgColor2;
align-self: flex-start;
padding: .5rem 1rem;
color: $mainTxtColor;
font-size: .8em;
width: 100%;
}

.portfolio__item-about 
{
list-style: inside;
}

.portfolio__git-link 
{
  width: 100%;
  
color: $mainTxtColor;
font-weight: bold;
  background: #000;
  text-align: center;
  padding: 0.7rem 1rem;
  font-size: .75em;
transition: all .2s linear;
  border-radius: 0  0  .7rem  .7rem;


    &:hover,&:focus
  {
    color: $mainAccentColor;
    text-decoration: underline;
  }

&:focus
{
box-shadow: 0 0 0 .3rem $mainAccentColor inset;
outline: none;
}

display: flex;
align-items: center;
justify-content: center;
}
.portfolio__git-link .icon
{

height: 1.4em;
width: 2em;
}
</style>
