<template>
  <v-card class="pa-5 rounded-xl">
    <span>Preço</span>

    <div class="d-flex justify-end align-end">
      <v-icon color="primary">mdi-hand-coin</v-icon>
      <h2 class="mx-2">{{ value[1] }}</h2>
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
export default {
  name: "filter-by-price-component",
  data() {
    return {
      value: [0, 10],
    };
  },
};
</script>
<style lang=""></style>
