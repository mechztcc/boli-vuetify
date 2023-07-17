<template>
  <AppBar />

  <v-container>
    <v-row>
      <v-col cols="4" md="4" lg="4" offset-md="4" offset-lg="4">
        <LessonCounter />
      </v-col>
      <v-col cols="8" md="4" lg="2" offset-lg="2">
        <OrderBy />
      </v-col>
    </v-row>

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
import OrderBy from "../components/OrderBy.vue";
import LessonCounter from "../components/LessonCounter.vue";

import { useSearchStore } from "../store/search";

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
    OrderBy,
    LessonCounter,
  },
  data() {
    return {
      store: useSearchStore(),
    };
  },

  mounted() {
    console.log(this.store.$state);
  },

  watch: {
    store() {
      console.log(this.store.credit);
    },
  },
};
</script>
<style lang=""></style>
