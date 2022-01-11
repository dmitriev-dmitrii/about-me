<template>

  <div class="form__wrapper">
    <form id="form-contact" method="POST" class="form" autocomplete="on" enctype="multipart/form-data">
      <legend>
        <h2 id="contacts" class="title">Контакты</h2>
        <p>Вы всегда можете со мной связаться
          <a target="blank" class="link" href="whatsapp://send?phone=79111795751">WhatsApp</a> или
          <a target="blank" class="link" href="https://t.me/Dmitrev_Dmitrii">Telegram</a>.
        </p>
      </legend>

      <label for="name">Ваше имя</label>
      <input id="name" class="form__input" name="name"  type="text" tabindex="0">
      <label for="phone">Телефон</label>
      <input id="phone" class="form__input"  name="phone"  type="tel" tabindex="0" 
        pattern="^[+ 0-9]+$"
        title="89111795751">
      <label for="email">Email</label>
      <input  id="email" class="form__input" type="email" name="email">
      <label for="message">Сообщение</label>
      <textarea name="message" class="form__input" id="message" cols="20" rows="5"></textarea>
      <button class="button" type="submit">Отправить</button>
      <span class="status-message">status-message</span>
    </form>
  </div>




</template>


<style lang="scss">
.form__wrapper{

display: flex;
justify-content: center;
align-items: center;
padding: 3rem;
background-color: $bgColor2;
}
.form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
.form legend
{
margin-bottom: 2em ;
}

.form textarea {
  resize: vertical;
  min-height: 5em;
}

.form__input {
  width: 100%;
  display: block;
  outline: none;
  border: .1rem solid #dedede;
  border-radius: .7rem;
  padding: 0.5em;
  font-size: 1.1em;
  margin-bottom: 1em;
  box-shadow: 0 .3rem .6rem rgba(102, 119, 136, 0.03), 0 1px 1px rgba(102, 119, 136, 0.4);

  background-color: $bgColor1;
  caret-color: $mainTxtColor;
  color: $mainTxtColor;
  transition: all 0.2s linear;
}

.form__input:focus {

  border: .1rem solid #33c7ef;
  box-shadow: 0 0 .1rem .1rem rgba(0, 0, 0, 0.1), 0 0 .7rem .3rem rgba(146, 224, 246, 0.9);
}

.form label {
  display: block;
  font-weight: 700;
  margin: 0.5em 0;
}

.status-message {
  display: block;
  padding: 0.5rem 0;
  transition: all 0.2s linear;
  font-weight: bold;
  color: transparent;
  user-select: none;
  text-shadow: 0 0 .1rem;
}

</style>