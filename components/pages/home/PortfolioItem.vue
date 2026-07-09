
<template>

      <div v-if="item.isActive" class="portfolio__item">
        
        <a class="portfolio__site-link" target="blank" :href="item.link">

          <div class="portfolio__title-wrapper">
            <h3 class="portfolio__title title">{{item.title}}</h3>
            <span class="portfolio__subtitle">{{item.description}}</span>
          </div>
          <nuxt-picture class="portfolio__img" :src="`portfolio/${item.imgName}.png`"  :alt="item.imgName+'-image'" />

        </a>

        <ul class="portfolio__item-about-list ">
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


<style>


.portfolio__item 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .05rem .3rem .1rem rgba(197, 197, 197, 0.5);
  border-radius: .7rem;
  overflow: hidden;

  background: var(--bg-color2);

  color: rgba(255, 255, 255, 0.8);

  transition: all .2s ease;
}

.portfolio__item:focus-within
  {
      box-shadow:  0 0 0 0 transparent;
  }

.portfolio__site-link 
{
height: 25rem;
width: 100%;

position: relative;

border:0 ;
border-bottom:.5rem solid ;
border-image: var(--lg) 5;

overflow: hidden;
transition: all .2s linear;
}

.portfolio__site-link:focus {
border:.5rem solid var(--main-accent-color);
outline: none;
}


.portfolio__site-link.portfolio__site-link:hover .portfolio__title,
.portfolio__site-link.portfolio__site-link:focus .portfolio__title
{

color: var(--link-text-color);
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
  transition: all 0.2s ease;
}

.portfolio__title 
{
  text-decoration: underline transparent;
  font-size: 1.1em;
  margin-bottom: 1rem;
  color: inherit;
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

}

.portfolio__item-about-list 

{
background-color: var(--bg-color2);
align-self: flex-start;
padding: .5rem 1rem;
color: var(--main-text-color);
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
  border-top: rgba(197, 197, 197, 0.2) 1px solid;
  color: inherit;
  font-weight: bold;
  background: #000;
  text-align: center;
  padding: 0.7rem 1rem;
  font-size: .75em;
  transition: all .2s ease;
  border-radius: 0  0  .7rem  .7rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio__git-link:hover,
.portfolio__git-link:focus
  {
    color: var(--main-accent-color);
    text-decoration: underline;
  }

.portfolio__git-link:focus
{
box-shadow: 0 0 0 .3rem var(--main-accent-color) inset;
outline: none;
}

.portfolio__git-link .icon
{

height: 1.4em;
width: 2em;
}
</style>
