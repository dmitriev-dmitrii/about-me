<template>
  <div id="__layout-defalut" ref="layout">
    <The-Header />
    <main >
      <nuxt />
    </main>
    <The-Footer />
  </div>
</template>

<script>
import TheHeader from '@/components/layout-defalut/TheHeader';
import TheFooter from '@/components/layout-defalut/TheFooter';

export default {
components:{
  TheHeader,
  TheFooter,
}
};

</script>


<style>


</style>
