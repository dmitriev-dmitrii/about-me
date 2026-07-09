<template>

<header class="header block-border-bottom">

    <nav id="nav" class="nav contanier  ">
	<ul class="nav__list">
        <li class="nav__item ">  <a class="underline"  href="/#experience">Опыт</a></li>
        <li class="nav__item ">  <a class="underline"  href="/#portfolio">Портфолио</a></li>
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
<style>

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}


.nav__list {

  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 767.98px){
.nav__list {
  justify-content: flex-end;
  } 
}

.nav__item {

font-size: .9em;
margin:0 1rem;
}

.nav__item:last-child {
  margin-right:0 ;
}


.nav__item label{
    padding: .5rem .2rem ;
}

.nav__item a{

  font-weight: 300;
  color: var(--main-text-color);
  cursor: pointer;
}


@media (min-width: 767.98px){ 
.nav__item a:hover
  {
      background-size: 100% .3rem;
  }
}

</style>



