<template>
  <v-card class="pa-5 rounded-xl">
    <span>Nível</span>

    <v-checkbox class="mt-4" label="Para todos" color="primary"></v-checkbox>
    <v-checkbox label="Iniciante" color="primary"></v-checkbox>
    <v-checkbox label="Intermediário" color="primary"></v-checkbox>
    <v-checkbox label="Avançado" color="primary"></v-checkbox>
  </v-card>
</template>
<script lang="ts">
export default {
  name: "filter-by-level-component",
};
</script>
<style lang=""></style>
