<template>
  <v-select
    rounded="lg"
    :items="items"
    label="Ordernar por"
    variant="solo"
    @update:model-value="reverseData()"
    class="fadeIn"
  ></v-select>
</template>
<script lang="ts">
import { mapActions } from "pinia";
import { useHomeStore } from "../store/home";

export default {
  name: "order-by-component",
  data() {
    return {
      items: ["Mais recentes", "Mais antigos"],
    };
  },

  methods: {
    ...mapActions(useHomeStore, ["reverseData"]),
  },
};
</script>
<style lang="scss"></style>
