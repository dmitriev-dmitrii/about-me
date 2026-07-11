<template>
  <div class="error-layout">
    <div class="container">
      <h1 class="title">
        {{ error.statusCode }}
      </h1>
      <h2>{{ error.message }}</h2>

      <NuxtLink to="/" class="button button-lg button-primary"> На главную </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 500, message: 'Unexpected Error' }),
    },
  },
}
</script>

<style scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}

.error-layout h1 {
  font-size: 8rem;
  margin: 0;
}

.error-layout h2 {
  font-size: 2rem;
  margin: 0 0 1rem;
}

.error-layout p {
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
