<template>
  <v-card class="pa-5 rounded-xl mt-3">
    <span>Preço</span>
    <div class="d-flex justify-end align-end">
      <v-badge left color="primary" :content="value[1]">
        <span slot="badge"></span>
        <!--slot can be any component-->
        <v-icon large color="primary">mdi-hand-coin</v-icon>
      </v-badge>
    </div>
    <v-range-slider
      color="primary"
      class="mt-4"
      min="0"
      max="10"
      step="1"
      v-model="value"
    ></v-range-slider>
  </v-card>
</template>
<script lang="ts">
import { useSearchStore } from "../store/search";

export default {
  name: "filter-by-price-component",
  data() {
    return {
      store: useSearchStore(),
      value: [0, 10],
    };
  },
  watch: {
    value() {
      this.onFilter();
    },
  },
  methods: {
    onFilter() {
      const state = this.store.$state;
      state.credit = this.value[1];
      this.store.addNewState(state);
    },
  },
};
</script>
<style lang="scss"></style>
