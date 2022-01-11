<template>
  <footer class="footer">

    <div class="footer__body">
      <div class="footer__top">
        <h4 class="title">
          <span class="first">Dmitriev</span>&nbsp;
          <span class="second">Dmitrii</span>
        </h4>
        <p>
          Санкт-Петербург, м. Садовая, готов к командировкам.<br>
        </p>

      </div>

      <div class="footer__bottom">
        <h4 class="title">Контакты</h4>
        <p>Вы сможете найти меня:</p>

        <div class="footer__social-list">
          <a class="footer__social-item" href="https://t.me/Dmitrev_Dmitrii" target="blank">
            <SvgIcon name="telegram"></SvgIcon>
          </a>
          <a class="footer__social-item" href="https://github.com/dmitriev-dmitrii/" target="blank">
            <SvgIcon name="github"></SvgIcon>
          </a>
          <a class="footer__social-item" href="https://vk.com/mr.dmitrievdmitrii" target="blank">
            <SvgIcon name="vk"></SvgIcon>
          </a>
        </div>

      </div>
    </div>
  </footer>
  
 <!-- <h1>footer     <img alt="Vue logo" src="../assets/logo.png"></h1> -->
</template>

<script>

</script>

<style scoped lang="scss">

.footer {


  padding: 1em 2em 2em 2em;
  background: #0d0d0d;
  color: #dedede;

}

.footer__body {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.footer-top,
.footer-bottom {
  margin: 2rem;
}

.footer__bottom .title 
{
  color: rgba(255, 255, 255, 0.96);
  // цвет скопирован из variables.scss для темной темы
}

.first {
  background: var(--lg);
  background-clip: text;
  color: transparent;
}

.second {
  color: #37f093;
}

.footer__social-list {
  display: flex;
}
.footer__social-item {
height: 2em;
width:  2em;
margin: 0.3em;

transition: all .2s linear;
  &:hover,
  &:focus {
    color: $minorAccentColor;
    text-shadow: 0 5px 7px;
    filter: drop-shadow( 0 .5rem .7rem);
  }

  &:nth-of-type(even):hover,
  &:nth-of-type(even):focus 
    {
    color: #33c7ef;
  }

}
.footer__social-item .svg-icon

{
height: 90%;
width: 90%;

}

</style>
