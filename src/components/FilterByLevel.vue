<template>
  <v-card class="pa-5 rounded-xl mt-3">
    <span>Nível</span>

    <v-checkbox
      class="mt-4"
      label="Para todos"
      color="primary"
      value="1"
      @click="onSelectLevel($event.target['value'])"
    ></v-checkbox>
    <v-checkbox
      label="Iniciante"
      color="primary"
      value="2"
      @click="onSelectLevel($event.target['value'])"
    ></v-checkbox>
    <v-checkbox
      label="Intermediário"
      color="primary"
      value="3"
      @click="onSelectLevel($event.target['value'])"
    ></v-checkbox>
    <v-checkbox
      label="Avançado"
      color="primary"
      value="4"
      @click="onSelectLevel($event.target['value'])"
    ></v-checkbox>
  </v-card>
</template>
<script lang="ts">
import { useSearchStore } from "../store/search";
export default {
  name: "filter-by-level-component",
  data() {
    return {
      store: useSearchStore(),
    };
  },
  methods: {
    onSelectLevel(value: number) {
      if (this.store.$state.level.includes(value)) {
        this.store.$state.level = this.store.$state.level.filter((el) => {
          return el != value;
        });
      } else {
        this.store.$state.level.push(value);
      }
    },
  },
};
</script>
<style lang=""></style>
