<template>
  <div
    class="d-flex flex-column pa-5 bg-white rounded-xl shadow-lg elevation-1"
  >
    <span class="mb-2">Data</span>
    <VueDatePicker
      v-model="date"
      locale="pt-BR"
      :enable-time-picker="false"
      auto-apply
    ></VueDatePicker>
    <div class="text-end">
      <v-btn
        outline
        color="primary"
        size="x-small"
        class="mt-2"
        rounded="xl"
        @click="date = '0000-00-00'"
      >
        <v-icon color="white">mdi-delete-forever</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { reverseDate } from "../services/handle-dates";
import { useSearchStore } from "../store/search";

export default {
  name: "filter-by-date-component",
  data() {
    return {
      date: "0000-00-00",
      store: useSearchStore(),
    };
  },
  mounted() {},
  computed: {},
  watch: {
    date() {
      if (this.date === "0000-00-00") {
        const state = this.store.$state;
        this.store.$state = {
          ...state,
          day: this.date,
        };
        return;
      }
      const date = new Date(this.date).toLocaleDateString();

      const state = this.store.$state;
      this.store.$state = {
        ...state,
        day: reverseDate(date),
      };
    },
  },
};
</script>
<style lang="scss"></style>
