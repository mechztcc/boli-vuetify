<template>
  <v-card class="rounded-xl pa-5 mt-3">
    <span>Ritmo</span>

    <v-btn
      color="success"
      v-for="(item, index) in store.$state.modality"
      :key="index"
      >{{ item }}</v-btn
    >

    <v-text-field
      label="Procure por modalidade(s) de dança"
      variant="plain"
      class="mt-3"
      rounded="xl"
      v-model="search"
    ></v-text-field>

    <v-btn
      variant="tonal"
      v-for="(item, index) in filtered"
      :key="index"
      @click="onClick(item)"
    >
      {{ item.name }}
    </v-btn>
  </v-card>
</template>
<script lang="ts">
import { IModality } from "@/types/modality.interface";
import { findModalities } from "../services/http.service";
import { useSearchStore } from "../store/search";

export default {
  name: "filter-by-rhitm-component",
  data() {
    return {
      store: useSearchStore(),
      search: "",
      filtered: [] as IModality[],
      modalities: [] as IModality[],
    };
  },

  async mounted() {
    this.modalities = await findModalities();
  },

  methods: {
    onClick(item: IModality) {
      let storeModalities = this.store.$state.modality;

      if (!storeModalities.includes(item.id)) {
        storeModalities.push(item.id);
      } else if (storeModalities.includes(item.id)) {
        storeModalities = storeModalities.filter((el) => {
          return el !== item.id;
        });
      }

      const state = {
        ...this.store.$state,
        modality: storeModalities,
      };
      this.store.addNewState(state);
      console.log(this.store.$state);
    },
  },

  watch: {
    search() {
      this.filtered = this.modalities.filter((el) => {
        return el.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
<style lang="scss"></style>
