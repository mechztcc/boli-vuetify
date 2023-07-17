<template>
  <v-card rounded="xl">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="5">
          <div class="d-flex align-center justify-center">
            <img class="rounded-xl" src="@/assets/photo.jpeg" alt="" />
            <div class="d-flex flex-column mx-5">
              <h4>Aula de dança</h4>
              <small class="subtitle">19 de junho de 2023</small>
              <span>Claudia silva</span>
              <span>@claudia</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="12" lg="7">
          <div class="d-flex align-center justify-center h-100">
            <div class="d-flex flex-column align-center justify-space-center">
              <span>Nível</span>
              <span class="bg-primary rounded-xl px-2">Iniciante</span>
            </div>

            <div
              class="d-flex flex-column align-center justify-space-center mx-5"
            >
              <span>Tipo</span>
              <span class="bg-primary rounded-xl px-2">On-line</span>
            </div>

            <div class="d-flex flex-column align-center justify-space-center">
              <span>Preço</span>
              <span class="rounded-xl px-2">1 crédito(s)</span>
            </div>

            <div class="d-flex mx-5  align-center justify-space-center">
              <span>Ver aula</span>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
export default {
  name: "card-lesson-component",

  data() {
    return {
      width: 0,
    };
  },

  mounted() {
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.width = window.innerWidth;
      });
    },
  },
};
</script>
<style lang=""></style>
