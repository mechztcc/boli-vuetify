<template>
  <v-card class="pa-7 rounded-lg">
    <h1 class="text-primary">{{ info?.name }}</h1>
    <span>O melhor plano para começar sua jornada</span>

    <div class="d-flex mt-4">
      <span>R$</span>
      <div class="d-flex align-end mx-2">
        <h1>{{ info?.price }}</h1>
        <span>/mês</span>
      </div>
    </div>
    <hr class="mt-3" />

    <div class="d-flex align-end mt-5">
      <v-icon color="primary">mdi-hand-coin</v-icon>
      <span class="mx-2">{{ info?.credit }} Créditos por mês</span>
    </div>

    <v-btn color="primary w-100 rounded-xl mt-10" size="large">
      <span class="text-white">Assinar plano</span>
    </v-btn>
  </v-card>
</template>
<script lang="ts">
export default {
  name: "card-plan-component",
  components: {},
  props: ["info"],
  data() {
    return {};
  },
};
</script>
<style lang="scss">
h1 {
  font-size: 2.5rem;
}
</style>
