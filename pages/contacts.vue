<template>
  <div class="form__wrapper block-border-bottom">
    <form
      id="form-contact"
      class="form"
      autocomplete="on"
      enctype="multipart/form-data"
      @submit.prevent="testForm"
    >
      <h4 id="contacts" class="title">Отправить Сообщение</h4>

      <label for="name">Ваше имя</label>
      <input id="name" v-model="form.name" class="form__input" type="text" placeholder="*" />
      <label for="phone">Телефон</label>
      <input
        id="phone"
        v-model="form.phone"
        class="form__input"
        minlength="10"
        pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"
        autocomplete="tel"
        type="tel"
        placeholder="*"
      />
      <label for="email">Email</label>
      <input id="email" v-model="form.email" class="form__input" type="email" />
      <label for="message">Сообщение</label>
      <textarea
        id="message"
        v-model="form.message"
        class="form__input"
        cols="20"
        rows="4"
      ></textarea>
      <div class="status-message">
        <span v-for="message in errors" :key="message" class="error"> {{ message }}<br /> </span>
        <span class="success"> {{ status }}<br /> </span>
        <span v-if="loading"> Отправка формы<br /> </span>
      </div>
      <button class="button" :disabled="loading" type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },

      loading: false,
      status: '',
      errors: [],
    }
  },
  methods: {
    testForm: function () {
      this.errors = []
      if (!this.form.name.length > 0) {
        this.errors.push('поле "Имя" обязательное')
      }
      if (!this.form.phone.length > 0) {
        this.errors.push('поле "Телефон" обязательное')
      }

      if (this.errors.length == 0) {
        this.sendMessage()
      }
    },
    sendMessage: function () {
      const token = '911702492:AAHG0Vm3jGvHaoG2WkTEF-sf3Zf4gKH_w5g'
      const chatID = '-302509922'

      let stringMessage = []

      for (let item in this.form) {
        const row = `<b>${item}</b>:%20${this.form[item]}%0A`
        stringMessage.push(row)
      }
      stringMessage = stringMessage.join('')
      this.loading = true
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&parse_mode=html&text=${stringMessage}`
      axios.get(url).then((e) => {
        if (e.status == 200) {
          this.status = 'Oтправленно!'
          this.form = {
            name: '',
            phone: '',
            email: '',
            message: '',
          }
        } else {
          this.errors.push('Что то пошло не так...')
        }
        this.loading = false
      })
    },
  },
}
</script>

<style>
.form__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 100%;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
}

@media (min-width: 575.98px) {
  .form {
    max-width: 70%;
  }
}

@media (min-width: 767.98px) {
  .form {
    max-width: 60%;
  }
}

@media (min-width: 991.98px) {
  .form {
    max-width: 50%;
  }
}

.form .title {
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
  border-radius: 0.7rem;
  border: 0.1rem solid rgb(197 197 197 / 30%);
  padding: 0.5em;
  font-size: 1.1em;
  margin-bottom: 1rem;
  background-color: var(--bg-color1);
  caret-color: var(--main-text-color);
  color: var(--main-text-color);
  box-shadow:
    0 0 0.1rem 0.1rem rgb(0 0 0 / 10%),
    0 0 0.7rem 0.3rem rgb(146 224 246 / 90%);
  transition: all 0.2s ease;
}

.form label {
  display: block;
  font-weight: 700;
  margin: 0.5em 0;
}

.form button[type='submit'] {
  align-self: flex-end;
}

.status-message {
  display: block;
  transition: all 0.2s ease;
  font-weight: bold;
  user-select: none;
  text-shadow: 0 0 0.1rem;
}

.error {
  color: var(--error-color);
}

.success {
  color: var(--succes-color);
}
</style>
