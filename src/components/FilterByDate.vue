<template>
  <v-card class="pa-5 rounded-xl fadeIn">
    <span class="">Data</span>
    <v-text-field
      label="Selecione o dia"
      prepend-inner-icon="mdi-calendar"
      variant="solo"
      rounded="xl"
      class="mt-3"
      v-model.trim="date"
    ></v-text-field>
  </v-card>
</template>
<script lang="ts">
import { useSearchStore } from "../store/search";
import { addMaskDate, reverseDate } from "../services/handle-dates";

export default {
  name: "filter-by-date-component",
  data() {
    return {
      date: new Date().toLocaleDateString(),
      store: useSearchStore(),
    };
  },
  mounted() {},
  computed: {},
  watch: {
    date() {
      if (this.date.length == 8) {
        this.date = addMaskDate(this.date);

        const state = this.store.$state;
        this.store.$state = {
          ...state,
          day: reverseDate(this.date),
        };
      }
    },
  },
};
</script>
<style lang="scss"></style>
