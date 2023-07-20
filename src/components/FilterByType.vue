<template>
  <v-card class="rounded-xl pa-5 mt-3 fadeIn">
    <span>Tipo</span>
    <v-checkbox
      label="Online"
      color="primary"
      v-model="status.online"
    ></v-checkbox>
    <v-checkbox
      label="Presencial"
      color="primary"
      v-model="status.local"
    ></v-checkbox>

    <v-text-field
      label="Cidade"
      variant="plain"
      rounded="xl"
      v-model="location.city"
      v-if="status.local"
      class="fadeIn"
    ></v-text-field>

    <v-text-field
      label="Bairro"
      variant="plain"
      rounded="xl"
      v-model="location.district"
      v-if="status.local"
      class="fadeIn"
    ></v-text-field>

    <v-btn round color="primary" class="w-100" rounded="xl" @click="onSearch()">
      <span class="text-white"> Buscar </span>
    </v-btn>
  </v-card>
</template>
<script lang="ts">
import { useSearchStore } from "../store/search";
export default {
  name: "filter-by-type-component",
  data() {
    return {
      store: useSearchStore(),
      status: {
        online: true,
        local: false,
      },
      location: {
        city: "",
        district: "",
      },
    };
  },

  watch: {
    status: {
      handler: function () {
        const state = this.store.$state;
        this.store.$state = {
          ...state,
          online: this.status.online,
          local: this.status.local,
        };
      },
      deep: true,
    },
  },

  methods: {
    onSearch() {
      this.store.$state = {
        ...this.store.$state,
        city: this.location.city,
        district: this.location.district,
      };
    },
  },
};
</script>
<style lang="scss"></style>
