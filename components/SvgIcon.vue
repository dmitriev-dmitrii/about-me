<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/static/img/svg/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }
      return icon.url;
    },

    className() {
      return 'svg-icon svg-icon--' + this.name;
    }
  }
};
</script>

<style>
.svg-icon 
{
  width: 100%;
  height: 100%;
  fill: currentColor;
}

</style>
