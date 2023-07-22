<template>
  <div class="h-100">
    <CardLogin />
  </div>
</template>
<script lang="ts">
import CardLogin from "../components/CardLogin.vue";
export default {
  name: "login-layout",
  components: {
    CardLogin,
  },
};
</script>
<style lang="scss">
.h-100 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #FFF;
}
</style>
