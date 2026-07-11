<template>
  <div>
    <div v-if="options.length" class="filter-tabs">
      <button
        v-for="(option, index) in options"
        :key="option.value ?? index"
        :class="{
          'button button-sm filter-tabs__item': true,
          'active-tab': option.value === value,
        }"
        @click="changeTab(option.value)"
      >
        {{ option.label }}
      </button>
    </div>

    <div v-else class="text-error">no data</div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    changeTab(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style scoped>
.filter-tabs {
  display: flex;
}
.filter-tabs__item {
  display: flex;
  border-radius: unset;
}

.filter-tabs__item:first-child {
  border-radius: 7px 0 0 7px; /* скругление слева */
}

/* ✅ ПОСЛЕДНИЙ ЭЛЕМЕНТ */
.filter-tabs__item:last-child {
  border-radius: 0 7px 7px 0; /* скругление справа */
}

.active-tab {
  background-color: var(--main-accent-color);
  color: #ffffff;
}
</style>
