<template>
  <div class="defalut-layout">
    <The-Header />
    <main >
      <nuxt />
    </main>
    <The-Footer />
  </div>
</template>

<script>
import AppHeader from '~/components/global/layout/AppHeader.vue';
import AppFooter from '~/components/global/layout/AppFooter.vue';


export default {
components:{
  TheHeader: AppHeader,
  TheFooter: AppFooter,
},
};

</script>





<style>


</style>
