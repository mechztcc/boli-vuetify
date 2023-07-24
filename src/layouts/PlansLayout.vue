<template>
  <div class="bg-white">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(item, index) in items"
          :key="index"
        >
          <CardPlan :info="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import CardPlan from "../components/plans/CardPlan.vue";
import { findPlans } from "../services/http.service";
import { IPlan } from "../types/plan.interface";
export default {
  name: "plans-layout",
  components: {
    CardPlan,
  },
  data() {
    return {
      items: [] as IPlan[],
    };
  },
  async mounted() {
    document.title = "Planos disponíveis";

    this.items = await findPlans();
  },
};
</script>
<style lang="scss"></style>
