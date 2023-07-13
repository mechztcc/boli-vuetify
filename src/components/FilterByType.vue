<template>
  <v-card class="rounded-xl pa-5">
    <span>Tipo</span>
    <v-checkbox label="Online" color="primary"></v-checkbox>
    <v-checkbox label="Presencial" color="primary"></v-checkbox>

    <v-text-field label="Insira seu endereço" variant="solo" rounded="lg"></v-text-field>
  </v-card>
</template>
<script lang="ts">
export default {
  name: "filter-by-type-component",
};
</script>
<style lang=""></style>
