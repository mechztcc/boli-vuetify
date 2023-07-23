<template>
  <div class="bg-white">
    <v-container class="">
      <v-col cols="12" md="6" lg="6" offset-md="3">
        <CardCreateAccount />
      </v-col>
    </v-container>
  </div>
</template>
<script lang="ts">
import CardCreateAccount from "../components/CardCreateAccount.vue";
export default {
  name: "create-account-layout",
  components: {
    CardCreateAccount,
  },
  data() {
    return {};
  },
};
</script>
<style lang=""></style>
