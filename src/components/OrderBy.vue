<template>
  <v-select rounded="lg" :items="items" label="Ordernar por" variant="solo"></v-select>
</template>
<script lang="ts">
export default {
  name: "order-by-component",
  data() {
    return {
      items: ["Mais recentes", "Mais antigos"],
    };
  },
};
</script>
<style lang="scss"></style>
