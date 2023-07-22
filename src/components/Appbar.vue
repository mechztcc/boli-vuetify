<template>
  <v-container fluid class="ma-0 pa-0 fadeIn">
    <v-col cols="12" class="d-flex justify-space-between pa-0">
      <v-col cols="2" md="2" class="d-flex justify-center align-center">
        <img src="@/assets/Logo.svg" alt="" />
      </v-col>
      <v-col
        cols="4"
        md="6"
        class="ma-0 d-flex justify-space-center align-center"
      >
        <v-text-field
          label="Pesquise por modalidade ou @professor"
          prepend-inner-icon="mdi-magnify"
          variant="solo"
          rounded="lg"
          class="ma-0"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-center">
        <h4 class="mx-5 pointer" @click="navigate()">Fazer login</h4>
        <v-icon size="large">mdi-cart-outline</v-icon>
      </v-col>
    </v-col>
  </v-container>
</template>
<script lang="ts">
export default {
  name: "appbar-component",
  methods: {
    navigate() {
      this.$router.push("login");
    },
  },
};
</script>
<style lang="scss">
.pointer {
  cursor: pointer;
}
img {
  width: clamp(40px, 100px, 100px);
  height: clamp(40px, 100px, 100px);
}
</style>
