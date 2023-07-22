<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="6" offset-md="3" offset-lg="3">
        <div class="d-flex flex-column justify-center align-center mb-10">
          <img src="@/assets/Logo.svg" alt="" />
          <h1 class="mt-5 text-primary">Acessar conta</h1>
        </div>
        <form ref="form">
          <v-text-field
            label="Email"
            variant="outlined"
            prepend-inner-icon="mdi-email-outline"
            rounded="lg"
          ></v-text-field>
          <v-text-field
            label="Senha"
            variant="outlined"
            type="password"
            append-inner-icon="mdi-eye-outline"
            prepend-inner-icon="mdi-lock"
            rounded="lg"
          ></v-text-field>

          <div class="d-flex flex-column text-center">
            <span>
              Ao continuar, você concorda com o Termos de serviço da Boli e
              Políticas de privacidade.
            </span>
            <span class="mt-3"> Não possui uma conta? Cadastre-se </span>
          </div>

          <v-btn color="primary" variant="flat" class="w-100 mt-5" rounded="lg" size="x-large">
            <span class="text-white"> Entrar </span>
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
export default {
  name: "card-login-component",
  data() {
    return {
      form: "",
    };
  },
};
</script>
<style lang=""></style>
