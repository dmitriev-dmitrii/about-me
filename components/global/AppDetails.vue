<template>
  <details class="app-details">
    <summary class="app-details__summary">
      <slot name="summary"></slot>
    </summary>
    <slot></slot>
  </details>
</template>

<script>
export default {}
</script>

<style scoped>
.app-details,
.app-details__summary {
  transition: all 0.2s ease;
}

.app-details {
  border: 1px solid currentColor;
  border-radius: 0.4375rem;
  margin: 0.5em 0 1.5em;
  padding: 0.5em 0.5em 0;
}

.app-details__summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  text-align: center;
}

.app-details[open] {
  padding: 0.5em;
}

.app-details[open] .app-details__summary {
  border-bottom: 1px solid currentColor;
  margin-bottom: 0.5em;
}
</style>
