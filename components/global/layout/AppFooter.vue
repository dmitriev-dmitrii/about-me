<template>
  <footer class="footer">
    <div class="footer__body container">
      <div class="footer__first">
        <h4 class="title" translate="no">
          <span>Dmitriev</span>&nbsp;
          <span>Dmitrii</span>
        </h4>
        <p translate="no">Frontend Developer<br /></p>
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
export default {}
</script>

<style scoped>
.footer {
  background: #0d0d0d;
  color: #dedede;
}

.footer__body {
  display: flex;
  flex-flow: column-reverse wrap;
  align-items: center;
  justify-content: center;
}

@media (min-width: 575.98px) {
  .footer__body {
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
}

@media (min-width: 575.98px) {
  .footer__first,
  .footer__second {
    margin-bottom: 0;
  }
}

@media (min-width: 575.98px) {
  .footer__first {
    align-items: flex-start;
  }
}

.footer__second .title {
  color: rgb(255 255 255 / 96%);
}

.footer__first > h4 {
  background: var(--lg);
  background-clip: text;
  color: transparent;
}

.footer__social-list {
  display: flex;
}

.footer__social-item {
  height: 2em;
  width: 2em;
  margin: 0.25em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  filter: drop-shadow(0 0 0);
}

.footer__social-item:hover,
.footer__social-item:focus {
  color: var(--main-accent-color);
  filter: drop-shadow(0 0.5rem 0.7rem);
}

.footer__social-item:nth-of-type(even):hover,
.footer__social-item:nth-of-type(even):focus {
  color: var(--minor-accent-color);
}

.footer__social-item .icon {
  height: 90%;
  width: 90%;
}
</style>
