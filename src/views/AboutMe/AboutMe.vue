<template>
<MyName/>
<HardSkills/>

<Description/>

<SvgSprite
  symbol="icons-dashboard"
  size="0 0 24 24"
  role="presentation"
  class="icon--inline"
/>

</template>


<script>

import MyName from "@/views/AboutMe/MyName.vue";
import HardSkills from "@/views/AboutMe/HardSkills.vue";


export default {
  components: {
    MyName,
    HardSkills,
  },
};

</script>

<style lang="scss">


</style>