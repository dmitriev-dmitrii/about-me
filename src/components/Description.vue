
<template>
<div class="description-wrapper contanier">
<h3 class="title underline">О подходе к работе</h3>

<p class="description">
p here Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsa!
p here Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsa!
p here Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsa!
</p>
<ul class="description">
  <li><h3>Title ul</h3></li>
  <li>Всегда верстаю Mobile First</li>
  <li>Пользусь БЭМ</li>
  <li>Нравится Ui, стараюсь делать удобно</li>
  <li>Git (десктоп)</li>
  
  <li>Я еще не выбрал фрейморк JS (изучаю Vue), хочу подстроиться под место работы</li>
  <li><time>November, 2011</time>-<time>November, 2011</time></li>
</ul>

</div>


</template>

<style lang="scss" >

.description-wrapper {

}

.description-wrapper .title {

  display: inline-block;

  // перенастраивает свойства из класса 'underline'
  background: $lg;
  background-size: 100% 5px;
  background-repeat: no-repeat;
  background-position: left 95%;
}

.description{
    font-size: .9em;
  &:last-child{
  border-bottom: #efefef 1px solid;
  padding-bottom:1rem ;
  }

}

ul.description,p.description
{
    line-height: 1.3em;
    margin-top: 1em ;
}

ul.description > li
{
margin: .5em 0;
}

ul.description > li>h3,
ul.description > li>time
{
font-weight: bold;
}

</style>

<script>

</script>

