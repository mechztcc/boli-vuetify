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
    <v-col cols="12" md="4" lg="4">
      <FilterByPrice />
    </v-col>
    <v-col cols="12" md="4" lg="4">
      <FilterByLevel />
    </v-col>
  </v-container>
</template>
<script lang="ts">
import AppBar from "../components/Appbar.vue";
import FilterByDate from "../components/FilterByDate.vue";
import FilterByType from "../components/FilterByType.vue";
import FilterByRhitm from "../components/FilterByRhitm.vue";
import FilterByLevel from "../components/FilterByLevel.vue";
import FilterByPrice from "../components/FilterByPrice.vue";
export default {
  name: "home-layout",
  components: {
    AppBar,
    FilterByDate,
    FilterByType,
    FilterByRhitm,
    FilterByLevel,
    FilterByPrice,
  },
};
</script>
<style lang=""></style>
