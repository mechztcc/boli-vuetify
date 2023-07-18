<template>
  <v-card rounded="xl" class="mb-3 fadeIn">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="5">
          <div class="d-flex align-center justify-center">
            <img class="rounded-xl" v-bind:src="info?.image" alt="" />
            <div class="d-flex flex-column mx-5">
              <h4 class="text-primary">{{ info?.name }}</h4>
              <small class="subtitle">{{ day }}</small>
              <small class="subtitle"
                >{{ info?.inicialTime }} {{ info?.finalTime }}</small
              >
              <span>{{ info?.teacherName }}</span>
              <span class="text-secondary">@{{ info?.teacherNickname }}</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="12" lg="7">
          <div class="d-flex align-center justify-space-around h-100">
            <div class="d-flex flex-column align-center justify-space-center">
              <span>Nível</span>
              <span class="bg-primary rounded-xl px-2">{{ info?.level }}</span>
            </div>
            <div class="d-flex flex-column align-center justify-space-center">
              <span>Preço</span>
              <span class="rounded-xl px-2">{{ info?.credit }} crédito(s)</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" lg="4">
          <div class="d-flex flex-column align-center justify-center">
            <span class="mt-2">Tipo</span>
            <small class="bg-primary rounded-xl px-2 py-1">
              {{ info?.location }}
            </small>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <div class="d-flex flex-column align-center justify-center">
            <span class="mt-2">Modalidade</span>
            <small class="bg-primary rounded-xl px-2 py-1">
              {{ info?.modality }}
            </small>
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
