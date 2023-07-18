<template>
  <v-card rounded="xl" class="mb-3">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="5">
          <div class="d-flex align-center justify-center">
            <img class="rounded-xl" src="@/assets/photo.jpeg" alt="" />
            <div class="d-flex flex-column mx-5">
              <h4 class="text-primary">{{ info?.name }}</h4>
              <small class="subtitle">{{ day }}</small>
              <small class="subtitle">{{ info?.inicialTime }} {{ info?.finalTime }}</small>
              <span>{{ info?.teacherName }}</span>
              <span class="text-secondary">@{{ info?.teacherNickname }}</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="12" lg="7">
          <div class="d-flex align-center justify-center h-100">
            <div class="d-flex flex-column align-center justify-space-center">
              <span>Nível</span>
              <span class="bg-primary rounded-xl px-2">{{ info?.level }}</span>
            </div>

            <div
              class="d-flex flex-column align-center justify-space-center mx-5"
            >
              <span>Tipo</span>
              <span class="bg-primary rounded-xl px-2">{{
                info?.location
              }}</span>
            </div>

            <div class="d-flex flex-column align-center justify-space-center">
              <span>Preço</span>
              <span class="rounded-xl px-2">{{ info?.credit }} crédito(s)</span>
            </div>

            <div class="d-flex mx-5 align-center justify-space-center">
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
import moment from "moment";
export default {
  name: "card-lesson-component",

  props: {
    info: Object,
  },

  data() {
    return {
      width: 0,
      data() {
        return {
          day: null,
        };
      },
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

  computed: {
    day() {
      return moment(this.info?.day).format("MMMM Do YYYY");
    },
  },
};
</script>
<style lang=""></style>
