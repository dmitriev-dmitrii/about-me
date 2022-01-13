<template>
  <footer class="footer">

    <div class="footer__body contanier">
      <div class="footer__first ">
        <h4 class="title" translate="no">
          <span class="first">Dmitriev</span>&nbsp;
          <span class="second">Dmitrii</span>
        </h4>
        <p translate="no">
          Frontend Developer<br>
        </p>
      </div>

      <div class="footer__second">
        <h5 class="title">Контакты</h5>
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
  
</template>

<script>

</script>

<style scoped lang="scss">

.footer {

  background: #0d0d0d;
  color: #dedede;
}

.footer__body {

  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px){ 
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer__first,
.footer__second {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px){ 
    margin-bottom: 0;
  }
}

.footer__first {
  @media (min-width: 575.98px){ 
    align-items: flex-start;
  }
}


.footer__second .title 
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
margin:.25em .5em;

  display: flex;
  align-items: center;
  justify-content: center;

transition: all .2s ease;

filter: drop-shadow( 0 0 0);
  &:hover,
  &:focus {
    color: $mainAccentColor;
    filter: drop-shadow( 0 .5rem .7rem);
  }

  &:nth-of-type(even):hover,
  &:nth-of-type(even):focus 
    {
    color: $minorAccentColor;
  }

}
.footer__social-item .icon

{
height: 90%;
width: 90%;
}

</style>
