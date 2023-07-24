<template>
  <div class="bg-white">
    <v-container>
      <h1 class="mt-10 text-primary">Planos flexíveis e sem compromisso!</h1>
      <span class="text-secondary">
        Com sua assinatura, você garante dança todo mês e tem vários benefícios:
      </span>

      <v-row class="mt-8">
        <v-col cols="12" md="4" lg="4" v-for="(item, index) in 3" :key="index">
          <CardAdvantage />
        </v-col>
      </v-row>

      <v-row class="mt-10">
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
import CardAdvantage from "../components/plans/CardAdvantage.vue";
import { findPlans } from "../services/http.service";
import { IPlan } from "../types/plan.interface";
export default {
  name: "plans-layout",
  components: {
    CardPlan,
    CardAdvantage,
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
