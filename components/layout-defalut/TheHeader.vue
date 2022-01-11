<template>

<header class="header">

    <nav id="nav" class="nav contanier ">
	<ul class="nav__list">
        <li class="nav__item ">  <a class="underline"  href="/#experience">Опыт</a></li>
        <li class="nav__item ">  <a class="underline"  href="/#contacts" >Контакты</a></li>
        <li class="nav__item "><DarkTheme/> </li>
    </ul>

    </nav>

</header>

</template>
<script>

import DarkTheme from "@/components/layout-defalut/DarkTheme.vue";
export default {
  components: {
    DarkTheme,
  },
};
</script>
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



</style>



