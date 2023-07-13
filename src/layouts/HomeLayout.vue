<template>
  <AppBar />

  <v-container>
    <v-col cols="12" md="4" lg="4">
      <FilterByDate />
    </v-col>
    <v-col cols="12" md="4" lg="4">
      <FilterByType />
    </v-col>
    <v-col cols="12" md="4" lg="4">
      <FilterByRhitm />
    </v-col>
  </v-container>
</template>
<script lang="ts">
import AppBar from "../components/Appbar.vue";
import FilterByDate from "../components/FilterByDate.vue";
import FilterByType from "../components/FilterByType.vue";
import FilterByRhitm from "../components/FilterByRhitm.vue";
export default {
  name: "home-layout",
  components: {
    AppBar,
    FilterByDate,
    FilterByType,
    FilterByRhitm
  },
};
</script>
<style lang=""></style>
