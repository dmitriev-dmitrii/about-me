<template>
  <div>
    <GlButtonGroup v-if="options.length" class="filter-tabs">
      <GlButton
        v-for="(option, index) in options"
        :key="option.value ?? index"
        size="small"
        :selected="option.value === value"
        @click="changeTab(option.value)"
      >
        {{ option.label }}
      </GlButton>
    </GlButtonGroup>

    <div v-else class="text-error">no data</div>
  </div>
</template>

<script>
import GlButton from '@gitlab/ui/dist/components/base/button/button'
import GlButtonGroup from '@gitlab/ui/dist/components/base/button_group/button_group'

export default {
  components: { GlButton, GlButtonGroup },

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
  flex-wrap: wrap;
}
</style>
