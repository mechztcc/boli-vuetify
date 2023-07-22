<template>
  <AppBar />
  <v-container>
    <v-row>
      <v-col cols="4" md="4" lg="4" offset-md="4" offset-lg="4">
        <LessonCounter />
      </v-col>
      <v-col cols="8" md="4" lg="2" offset-lg="2">
        <OrderBy />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" lg="4">
        <FilterByDate />
        <FilterByType />
        <FilterByRhitm />
        <FilterByPrice />
        <FilterByLevel />
      </v-col>
      <v-col cols="12" md="8" lg="8" v-if="!isLoading && data.length > 0">
        <CardLesson
          v-for="(item, index) in filtered"
          :key="index"
          :info="item"
        />
        <v-pagination
          v-model="page"
          :length="data.length / itemsPerPage"
          v-on:update:model-value="paginate()"
        ></v-pagination>
      </v-col>
      <v-col cols="12" md="8" lg="8" v-if="isLoading">
        <div class="d-flex h-100 justify-center align-center">
          <div class="d-flex flex-column align-center">
            <v-progress-circular
              color="primary"
              indeterminate
              :size="36"
            ></v-progress-circular>
            <span>Buscando informações...</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import AppBar from "../components/Appbar.vue";
import FilterByDate from "../components/FilterByDate.vue";
import FilterByType from "../components/FilterByType.vue";
import FilterByRhitm from "../components/FilterByRhitm.vue";
import FilterByLevel from "../components/FilterByLevel.vue";
import FilterByPrice from "../components/FilterByPrice.vue";
import CardLesson from "../components/CardLesson.vue";
import OrderBy from "../components/OrderBy.vue";
import LessonCounter from "../components/LessonCounter.vue";

import { useSearchStore } from "../store/search";
import { useHomeStore } from "../store/home";
import { search } from "../services/http.service";
import { mapState } from "pinia";
import { ILesson } from "@/types/lesson.interface";

export default {
  name: "home-layout",
  components: {
    AppBar,
    FilterByDate,
    FilterByType,
    FilterByRhitm,
    FilterByLevel,
    FilterByPrice,
    CardLesson,
    OrderBy,
    LessonCounter,
  },
  data() {
    return {
      store: useSearchStore(),
      storeHome: useHomeStore(),
      itemsPerPage: 5,
      page: 1,
      filtered: [] as ILesson[],
      isLoading: false,
      date: null,
    };
  },

  mounted() {
    document.title = 'Buscar aulas'
    this.store.$subscribe((mutation, state) => {
      this.isLoading = true;
      search(state)
        .then(
          (data) => (
            (this.storeHome.$state.data = data),
            (this.filtered = data?.slice(0, this.itemsPerPage))
          )
        )
        .finally(() => (this.isLoading = false));
    });

    this.onDefaultSearch();
  },

  computed: {
    ...mapState(useHomeStore, ["data"]),
  },

  methods: {
    onDefaultSearch() {
      const state = { ...this.store.$state, online: true };
      this.isLoading = true;
      search(state)
        .then(
          (data) => (
            (this.storeHome.$state.data = data),
            (this.filtered = data?.slice(0, this.itemsPerPage))
          )
        )
        .finally(() => (this.isLoading = false));
    },
    paginate() {
      const offset = this.page * this.itemsPerPage - this.page;
      this.filtered = this.data.slice(offset, offset + this.itemsPerPage);
    },
  },

  watch: {},
};
</script>
<style lang=""></style>
