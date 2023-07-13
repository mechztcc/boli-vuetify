<template>
  <AppBar />

  <v-container>
    <v-col cols="12" md="4" lg="4">
      <FilterByDate />
    </v-col>
  </v-container>
</template>
<script lang="ts">
import AppBar from "../components/Appbar.vue";
import FilterByDate from "../components/FilterByDate.vue";
export default {
  name: "home-layout",
  components: {
    AppBar,
    FilterByDate,
  },
};
</script>
<style lang=""></style>
