<template>
  <div class="contacts container">
    <section class="settings-section">
      <div class="settings-section__intro">
        <h1 class="section-title">Отправить сообщение</h1>
        <p class="text-subtle">
          Сообщение придёт мне напрямую. Поля «Имя» и «Телефон» обязательные.
        </p>

        <h2 class="section-title contacts__direct-title">Я в сети</h2>
        <ul class="contacts__links">
          <li v-for="link in socialLinks" :key="link.name">
            <GlIcon :name="link.icon" class="contacts__link-icon" />
            <GlLink :href="link.href" target="_blank">{{ link.label }}</GlLink>
          </li>
        </ul>
      </div>

      <form
        id="form-contact"
        class="settings-section__form"
        autocomplete="on"
        novalidate
        @submit.prevent="testForm"
      >
        <GlAlert
          v-if="errors.length"
          variant="danger"
          title="Проверьте форму"
          class="contacts__alert"
          @dismiss="errors = []"
        >
          <ul class="contacts__errors">
            <li v-for="message in errors" :key="message">{{ message }}</li>
          </ul>
        </GlAlert>

        <GlAlert v-if="status" variant="success" class="contacts__alert" @dismiss="status = ''">
          {{ status }}
        </GlAlert>

        <GlFormGroup label="Ваше имя" label-for="name">
          <GlFormInput
            id="name"
            v-model="form.name"
            autocomplete="name"
            :state="fieldState('name')"
          />
        </GlFormGroup>

        <GlFormGroup
          label="Телефон"
          label-for="phone"
          label-description="Например, +7-999-123-45-67"
        >
          <GlFormInput
            id="phone"
            v-model="form.phone"
            type="tel"
            autocomplete="tel"
            :state="fieldState('phone')"
          />
        </GlFormGroup>

        <GlFormGroup label="Email" label-for="email" optional optional-text="(необязательно)">
          <GlFormInput id="email" v-model="form.email" type="email" autocomplete="email" />
        </GlFormGroup>

        <GlFormGroup label="Сообщение" label-for="message" optional optional-text="(необязательно)">
          <GlFormTextarea id="message" v-model="form.message" :rows="5" />
        </GlFormGroup>

        <div class="settings-section__footer">
          <GlButton variant="confirm" type="submit" :loading="loading">Отправить</GlButton>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { SOCIAL_LINKS } from '~/constants/profile'
import GlAlert from '@gitlab/ui/dist/components/base/alert/alert'
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlFormGroup from '@gitlab/ui/dist/components/base/form/form_group/form_group'
import GlFormInput from '@gitlab/ui/dist/components/base/form/form_input/form_input'
import GlFormTextarea from '@gitlab/ui/dist/components/base/form/form_textarea/form_textarea'
import GlIcon from '@gitlab/ui/dist/components/base/icon/icon'
import GlLink from '@gitlab/ui/dist/components/base/link/link'

// Адрес серверной прослойки (например, Cloudflare Worker), которая пересылает сообщение в Telegram.
// Токен бота хранится только там — в коде сайта его быть не должно.
// Пока адрес пустой, форма не отправляется и предлагает написать через GitHub / GitLab.
const CONTACT_ENDPOINT = ''

const emptyForm = () => ({
  name: '',
  phone: '',
  email: '',
  message: '',
})

export default {
  components: { GlAlert, GlButton, GlFormGroup, GlFormInput, GlFormTextarea, GlIcon, GlLink },

  data: () => {
    return {
      socialLinks: SOCIAL_LINKS,
      form: emptyForm(),
      submitted: false,
      loading: false,
      status: '',
      errors: [],
    }
  },

  methods: {
    fieldState(field) {
      if (!this.submitted) return null
      return this.form[field].length > 0 ? null : false
    },

    testForm: function () {
      this.submitted = true
      this.status = ''
      this.errors = []
      if (!this.form.name.length > 0) {
        this.errors.push('Поле «Имя» обязательное')
      }
      if (!this.form.phone.length > 0) {
        this.errors.push('Поле «Телефон» обязательное')
      }

      if (this.errors.length == 0) {
        this.sendMessage()
      }
    },

    async sendMessage() {
      if (!CONTACT_ENDPOINT) {
        this.errors.push('Отправка формы пока не настроена — напишите мне через GitHub или GitLab')
        return
      }

      this.loading = true
      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form),
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        this.status = 'Сообщение отправлено, спасибо!'
        this.form = emptyForm()
        this.submitted = false
      } catch (e) {
        this.errors.push('Не удалось отправить сообщение, попробуйте ещё раз')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.settings-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 2rem;
}

@media (min-width: 767.98px) {
  .settings-section {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  }
}

.settings-section__intro .text-subtle {
  margin-top: 0.5rem;
}

.contacts__direct-title {
  margin-top: 1.5rem;
  font-size: 0.875rem;
}

.contacts__links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.contacts__links li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contacts__link-icon {
  color: var(--gl-icon-color-subtle);
}

.settings-section__form {
  max-width: 40rem;
}

.contacts__alert {
  margin-bottom: 1rem;
}

.contacts__errors {
  margin: 0;
}

.settings-section__footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--gl-border-color-default);
}
</style>
