<template>
  <div class="my-name__wrapper contanier">
    <div class="my-name">
      <picture>
        <source
          class="my-name__photo"
          srcset="@/static/img/dmitriev__dmitrii.webp"
          type="image/webp"
        />
        <img
          class="my-name__photo"
          alt="dmitriev__dmitrii"
          src="@/static/img/dmitriev__dmitrii.jpg"/>
      </picture>

      <div class="my-name__about">
        <h2 class="title">Dmitriev Dmitrii</h2>
        <p>junior Frontend</p>
        <a class="button" href="#form-contact">Связаться</a>
      </div>
    </div>

    <div class="code">
      console.log(dmitrievd);<br />
      {<br />

      "name": "dmitrii",<br />
      "surename":dmitriev,<br />
      "age": "28",<br />
      "location:" Saint-Petersburg,<br />
      "position":juniorFrontend,...<br />
      }
    </div>
  </div>





</template>


<script>

</script>


<style lang="scss">
.my-name__wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem 1rem;
     @media (min-width: 767.98px){
  flex-wrap: nowrap;
    } 
}

.my-name {
flex-basis: 50%;
display: flex;
flex-wrap: wrap;
@media (min-width: 767.98px){

flex-wrap: nowrap;
align-items: center;

    } 
}

.my-name__about {
  padding:  1rem ;
@media (min-width: 767.98px){
padding: 2rem ;
    } 
}

.my-name__photo {
 border-radius: .7rem;
  box-shadow: -.2rem .2rem 1rem .1rem currentColor;
  object-fit: cover;

  max-width: 20rem;
  max-height: 30rem;
 
}

.code {
  font-family: Menlo, Roboto Mono, Courier New, monospace;
  background: #0d0d0d;
  color: #d5d5d5;
  line-height: 2.3em;
  font-weight: 400;
  padding: 1.5rem;
  border-radius: .7rem;
  border-top: 2rem solid #d0d0d0;
  font-size: 0.8em;
  box-shadow: 0.3rem 0.3rem 3rem currentColor;

  align-self: flex-start;
  flex-basis: 50%;

display: flex;
justify-content: center;

}



</style>