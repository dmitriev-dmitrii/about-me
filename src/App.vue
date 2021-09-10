<template>
  <Header />
    <AboutMe/>
    <Experience/>
    <Contacts/>
  <Footer />
</template>

<script>

// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


import AboutMe from "@/views/AboutMe/AboutMe.vue";
import Experience from "@/views/Experience/Experience.vue";
import Contacts from "@/views/Contacts/Contacts.vue";


export default {
  components: {
    Header,
    Footer,
    AboutMe,
    Experience,
    Contacts,
  },
};
</script>

