<template>
  <div class="d-flex align-center h-100 fadeIn">
    <span>{{ data.length }} Aulas encontradas</span>
  </div>
</template>
<script lang="ts">
import { mapState } from "pinia";
import { useHomeStore } from "../store/home";

export default {
  name: "lesson-counter-component",
  computed: {
    ...mapState(useHomeStore, ["data"]),
  },
};
</script>
<style lang=""></style>
