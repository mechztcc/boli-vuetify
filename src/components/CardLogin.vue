<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="6" offset-md="3" offset-lg="3">
        <div class="d-flex flex-column justify-center align-center mb-10">
          <img src="@/assets/Logo.svg" alt="" />
          <h1 class="mt-5 text-primary">Acessar conta</h1>
        </div>
        <v-form ref="form" lazy-validation>
          <v-text-field
            label="Email"
            variant="outlined"
            prepend-inner-icon="mdi-email-outline"
            rounded="lg"
            v-model="form.email"
            :rules="form.rules.emailRules"
          ></v-text-field>
          <v-text-field
            class="mt-3"
            label="Senha"
            variant="outlined"
            :type="form.visibility ? 'password' : 'text'"
            append-inner-icon="mdi-eye-outline"
            prepend-inner-icon="mdi-lock"
            rounded="lg"
            v-model="form.password"
            :rules="form.rules.passwordRules"
            @click:append-inner="form.visibility = !form.visibility"
          ></v-text-field>

          <div class="d-flex flex-column text-center">
            <span>
              Ao continuar, você concorda com o Termos de serviço da Boli e
              Políticas de privacidade.
            </span>
            <span class="mt-3"> Não possui uma conta? Cadastre-se </span>
          </div>

          <v-btn
            color="primary"
            variant="flat"
            class="w-100 mt-5"
            rounded="lg"
            size="x-large"
            @click="validateForm()"
          >
            <span class="text-white"> Entrar </span>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { login } from "../services/http.service";
import { ILogin } from "../types/login.interface";
export default {
  name: "card-login-component",
  data() {
    return {
      form: {
        visibility: true,
        email: "",
        password: "",
        rules: {
          emailRules: [(email: string) => !!email || "E-mail is required"],
          passwordRules: [(pass: string) => !!pass || "Password is required"],
        },
      },
    };
  },

  methods: {
    async validateForm() {
      const { valid } = await (this.$refs as any).form.validate();
      if (!valid) {
        return;
      }

      const payload: ILogin = {
        email: this.form.email,
        password: this.form.password,
      };

      const data = await login(payload);
      if (!data) {
        return;
      }

      localStorage.setItem("token", data.token);
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style lang="scss"></style>
