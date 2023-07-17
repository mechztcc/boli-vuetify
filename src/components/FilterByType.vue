<template>
  <v-card class="rounded-xl pa-5 mt-3">
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
      label="Insira seu endereço"
      variant="plain"
      rounded="xl"
    ></v-text-field>
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
};
</script>
<style lang="scss"></style>
