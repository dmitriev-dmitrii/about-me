<template >

    <div class="experience__item ">
      <h3 class=" title ">{{item.title}} <a :href="item.link" class="link">{{item.linkTxt}}</a> </h3>
      <h3 >Должность : <span class="title">{{item.position}}</span> </h3>
      <p class="description experience__item-time">
        {{item.time}}
      </p>
      <the-details class="experience__item-description">
        <div v-html="item.description"></div> 
      </the-details>
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

.experience__item{
  font-size: .8em;
  margin: .5em 0;
  width: 100%;
  max-width: 35rem;

  @media (min-width: 767.98px){
    
    max-width: 50%;
    align-self: flex-start;
    text-align: left;
    &:nth-child(2){
    align-self: flex-end;
    text-align: right;
    }
  } 

}
.experience__item .title
{
  font-size: 1.1em;
}

.experience__item-time
{

}
.experience__item-description 
{
  line-height: 1.3em;

}
.experience__item-description p,ul
{
  padding: .5rem;
}
.experience__item-description ul>li
{
  list-style: inside;
  padding: .25rem;
}
</style>