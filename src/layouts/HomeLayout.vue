<template>
  <AppBar />

  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="4">
        <FilterByDate />
        <FilterByType />
        <FilterByRhitm />
        <FilterByPrice />
        <FilterByLevel />
      </v-col>

      <v-col cols="12" md="8" lg="8">
        <CardLesson />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import AppBar from "../components/Appbar.vue";
import FilterByDate from "../components/FilterByDate.vue";
import FilterByType from "../components/FilterByType.vue";
import FilterByRhitm from "../components/FilterByRhitm.vue";
import FilterByLevel from "../components/FilterByLevel.vue";
import FilterByPrice from "../components/FilterByPrice.vue";
import CardLesson from "../components/CardLesson.vue";
export default {
  name: "home-layout",
  components: {
    AppBar,
    FilterByDate,
    FilterByType,
    FilterByRhitm,
    FilterByLevel,
    FilterByPrice,
    CardLesson,
  },
};
</script>
<style lang=""></style>
