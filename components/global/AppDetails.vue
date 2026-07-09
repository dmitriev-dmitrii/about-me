<template>
  <details class="the-details">
    <summary class="the-details__summary">
      <slot name="summary"> Подробнее </slot>
    </summary>
    <slot> </slot>
  </details>
</template>
<script>
export default {}
</script>
<style>
.the-details,
.the-details__summary {
  transition: all 0.2s ease;
}

.the-details {
  border: 1px solid currentColor;
  border-radius: 0.7rem;
  margin: 0.5em 0 1.5em;
  padding: 0.5em 0.5em 0;
}

.the-details__summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  text-align: center;
}

.the-details[open] {
  padding: 0.5em;
}

.the-details[open] .the-details__summary {
  border-bottom: 1px solid currentColor;
  margin-bottom: 0.5em;
}
</style>
