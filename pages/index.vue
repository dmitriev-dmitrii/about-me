<template>
  <div class="my-name__wrapper container">
    <div class="my-name">
      <NuxtPicture class="my-name__photo" src="dmitriev-dmitrii.jpg" alt="dmitriev-dmitrii" />

      <div class="my-name__about">
        <h2 translate="no" class="title">Dmitriev Dmitrii</h2>
        <p translate="no">Frontend Developer</p>
        <a class="button" href="#form-contact">Связаться</a>
      </div>
    </div>

    <div class="code" translate="no">
      console.log(dmitrievd);<br />
      {<br />

      "name": "dmitrii",<br />
      "surename":dmitriev,<br />
      "age": "29",<br />
      "location:" Saint-Petersburg,<br />
      "position":Frontend Developer,<br />
      ... }
    </div>

    <!--    <div class="codewars-badge">-->
    <!--      <a href="https://www.codewars.com/users/dmitriev-dmitrii" target="_blank">-->
    <!--        <img-->
    <!--            src="https://www.codewars.com/users/dmitriev-dmitrii/badges/large"-->
    <!--            alt="Мой профиль на Codewars"-->
    <!--        />-->
    <!--      </a>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {}
</script>

<style>
.my-name__wrapper {
  margin-top: 1em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 575.98px) {
  .my-name__wrapper {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
  }
}

.my-name {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
}

@media (min-width: 413.98px) {
  .my-name {
    align-items: center;
  }
}

@media (min-width: 575.98px) {
  .my-name {
    flex-direction: column;
  }
}

.my-name__about {
  width: 100%;
  padding-left: 1rem;
  justify-content: space-between;
}

@media (min-width: 575.98px) {
  .my-name__about {
    text-align: center;
    flex-direction: column;
    padding: 0;
  }
}

.my-name__about .title {
  margin: 1rem 0;
}

.my-name__about .button {
  width: 100%;
  margin-bottom: 0;
}

.my-name__photo {
  border-radius: 0.7rem;
  box-shadow: -0.2rem 0.2rem 1rem 0.1rem currentColor;
  display: block;
  overflow: hidden;
  width: 100%;
  max-width: 25rem;
  max-height: 35rem;
}

.code {
  font-family: 'Menlo', 'Roboto Mono', 'Courier New', monospace;
  background: #0d0d0d;
  color: #d5d5d5;
  line-height: 2.3em;
  font-weight: 400;
  font-size: 0.8em;
  padding: 1.5rem;
  border-radius: 0.7rem;
  border-top: 2rem solid #d0d0d0;
  box-shadow: 0.3rem 0.3rem 3rem currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

@media (min-width: 575.98px) {
  .code {
    max-width: 50%;
  }
}

@media (min-width: 767.98px) {
  .code {
    max-width: 60%;
  }
}
</style>
