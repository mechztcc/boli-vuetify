<template>
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>
