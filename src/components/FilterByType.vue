<template>
  <v-card class="rounded-xl pa-5 mt-3">
    <span>Tipo</span>
    <v-checkbox label="Online" color="primary"></v-checkbox>
    <v-checkbox label="Presencial" color="primary"></v-checkbox>

    <v-text-field
      label="Insira seu endereço"
      variant="plain"
      rounded="xl"
    ></v-text-field>
  </v-card>
</template>
<script lang="ts">
export default {
  name: "filter-by-type-component",
  data() {
    return {
      info: "Tik",
    };
  },

  mounted() {
    setTimeout(() => {
      this.info = `${this.info} Tak`;
    }, 3000);
  },

  watch: {
    info() {
      console.log(this.info);
    },
  },
};
</script>
<style lang="scss"></style>
