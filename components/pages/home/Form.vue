<template>

  <div class="form__wrapper block-border-bottom ">
    <form id="form-contact" method="POST" class="form" autocomplete="on" enctype="multipart/form-data">
      <h4 id="contacts" class="title">
        Отправить Сообщение
      </h4>

      <label for="name">Ваше имя</label>
      <input id="name" class="form__input" name="name" type="text" placeholder="*" >
      <label for="phone">Телефон</label>
      <input id="phone" class="form__input"  name="phone" type="tel" placeholder="*" 
        pattern="^[+ 0-9]+$"
        title="89111795751">
      <label for="email">Email</label>
      <input  id="email" class="form__input" type="email" name="email">
      <label for="message">Сообщение</label>
      <textarea id="message" name="message" class="form__input"  cols="20" rows="5"></textarea>
      <span class="status-message">status-message</span>
      <button class="button" type="submit">Отправить</button>
    </form>
  </div>

</template>


<style lang="scss">

.form__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bgColor2;
}

.form {

  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em;

  display: flex;
  flex-direction: column;

  @media (min-width: 575.98px){ 
    max-width: 70%;
  }
  @media (min-width: 767.98px){
    max-width: 60%;
  } 
  @media (min-width: 991.98px){
  max-width: 50%;
  }

}
.form legend
{
text-align: center;
width: 100%;
}

.form textarea {
  resize: vertical;
  min-height: 5em;
}

.form__input {
  width: 100%;
  display: block;
  outline: none;
  border: .1rem solid #c5c5c5;
  border-radius: .7rem;
  padding: 0.5em;
  font-size: 1.1em;
  margin-bottom: 1em;
  box-shadow: 0 .3rem .6rem rgba(102, 119, 136, 0.03), 0 1px 1px rgba(102, 119, 136, 0.4);

  background-color: $bgColor1;
  caret-color: $mainTxtColor;
  color: $mainTxtColor;
  transition: all 0.2s linear;
  &:focus {
  border: .1rem solid $mainAccentColor;
  box-shadow: 0 0 .1rem .1rem rgba(0, 0, 0, 0.1), 0 0 .7rem .3rem rgba(146, 224, 246, 0.9);
}
}

.form label {
  display: block;
  font-weight: 700;
  margin: 0.5em 0;
}

.form button[type=submit] {
align-self: flex-end;
}

.status-message {
  display: block;
  transition: all 0.2s ease;
  font-weight: bold;
  color: transparent;
  user-select: none;
  text-shadow: 0 0 .1rem;
}

</style>