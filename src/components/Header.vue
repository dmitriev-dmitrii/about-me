<template>

<header class="header">

    <nav id="nav" class="nav contanier ">
	<ul class="nav__list">
        <li class="nav__item ">  <router-link class="underline" to="/">Главная</router-link></li>
        <li class="nav__item ">  <router-link class="underline"  to="/Experience">Опыт</router-link></li>
        <li class="nav__item ">  <router-link class="underline"  to="/contacts" >Контакты</router-link></li>
        <li class="nav__item "><DarkThemeCheckBox/> </li>
    </ul>

    </nav>

</header>
<router-view />
</template>

<style lang="scss" >

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #efefef 1px solid;
}



.nav__list {
  display: flex;
  justify-content: center;
  align-items: center;
   @media (min-width: 767.98px){
  justify-content: flex-end;
  } 
}

.nav__item {
  margin:0 0.5em;
  font-size: .9em;

}


.nav__item label{
    padding: .5rem .2rem ;
}

.nav__item a{
    padding: .5rem .2rem ;
  font-weight: 300;
  color: var(--main-text-color);
  cursor: pointer;


@media (min-width: 767.98px){ 
  &:hover

  {
        background-size: 100% .3rem;
  }

 }

}

.nav__item a.router-link-active 
{
-webkit-text-stroke:.1rem ;
text-shadow:0 0 .1rem #37f093 ;
user-select: none;
opacity: 0.5;
pointer-events: none;
background-size: 100% .3rem;

outline-color: currentColor;
}


</style>

<script>

import DarkThemeCheckBox from "@/components/DarkThemeCheckBox.vue";


export default {
  components: {
    DarkThemeCheckBox,
  },
};
</script>

