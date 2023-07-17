<template>
  <v-card class="rounded-xl pa-5 mt-3">
    <span>Ritmo</span>

    <v-text-field
      label="Procure por modalidade(s) de dança"
      variant="plain"
      class="mt-3"
      rounded="xl"
    ></v-text-field>
  </v-card>
</template>
<script lang="ts">
import { findModalities } from "../services/http.service";
export default {
  name: "filter-by-rhitm-component",
  date() {
    return {};
  },

  mounted() {
    console.log(findModalities());
  },
};
</script>
<style lang=""></style>
