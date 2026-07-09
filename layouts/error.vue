<template>
  <div class="error-page">
    <div class="container">
      <h1>
        {{ error.statusCode }}
      </h1>
      <h2>{{ error.message }}</h2>

      <NuxtLink to="/" class="button"> На главную </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  error: {
    type: Object,
    required: true,
    default: () => ({ statusCode: 500, message: 'Unexpected Error' }),
  },
}
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}

.error-page h1 {
  font-size: 8rem;
  margin: 0;
  opacity: 0.3;
}

.error-page h2 {
  font-size: 2rem;
  margin: 0 0 1rem;
}

.error-page p {
  margin-bottom: 2rem;
  opacity: 0.7;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--main-text-color, #333);
  color: var(--bg-color, #fff);
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.8;
}
</style>
