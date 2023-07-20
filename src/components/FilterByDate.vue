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
  </div>
</template>
<script lang="ts">
import { useSearchStore } from "../store/search";
import { addMaskDate, reverseDate } from "../services/handle-dates";

export default {
  name: "filter-by-date-component",
  data() {
    return {
      date: '0000-00-00',
      store: useSearchStore(),
    };
  },
  mounted() {},
  computed: {},
  watch: {
    date() {

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
