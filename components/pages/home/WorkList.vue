<template class="">

<div class="experience block-border-bottom  ">

<!-- <description></description> -->

  <h2 id="experience" class="title">Опыт работы</h2>

<div class="experience__list contanier">

    <div class="experience__item ">
      <h3 class=" title ">Артис <a href="" class="link">artis.abc</a> </h3>
      <h3 class=" title">Верстальщик</h3>
      <p class="description experience__item-time">
        c января 2019 - февраяль 2022 (6 лет 2 месяца)
      </p>
      <the-details>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto alias dolorum voluptatem doloremque optio aperiam explicabo hic ut, quo non voluptate excepturi sit deserunt ullam recusandae officiis voluptatibus praesentium iusto provident dolore illo ea sunt repellendus? Tempore, minus sint incidunt, ab, alias iusto aperiam ut necessitatibus inventore natus eius?
      </the-details>
    </div>

      <div class="experience__item" >
      <h3 class=" title">Артис <a href="" target="blank" class="link">artis.abc</a> </h3>
      <h3 class=" title">Верстальщик</h3>
      <p class="description experience__item-time">
        c января 2019 - февраяль 2022 (6 лет 2 месяца)
      </p>
      <the-details>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur? Rerum commodi dignissimos quasi enim sint earum, ratione doloremque, in nisi perspiciatis minima et ab aperiam vel, totam nihil magnam. 
      </the-details>
    </div>

</div>

</div>

</template>

<script>

</script>

<style lang="scss">
.experience >.title {
  text-align: center;
}
.experience__list{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.experience__item{
  font-size: .8em;
  margin: .5em 0;
  width: 100%;
  max-width: 40rem;

  @media (min-width: 991.98px){

    max-width: 45%;

    align-self: flex-start;
    
    &:nth-child(2){
    align-self: flex-end;
    text-align: right;
    
    }
  }

}
.experience__item >.title
{
  font-size: 1.1em;
}

.experience__item-time
{

}
</style>