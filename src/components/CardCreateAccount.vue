<template>
  <v-container>
    <div class="d-flex flex-column justify-center align-center mb-10">
      <img src="@/assets/Logo.svg" alt="" />
      <h1 class="mt-5 text-primary">Criar conta</h1>
    </div>

    <v-form lazy-validation ref="form">
      <v-text-field
        label="Nome"
        variant="outlined"
        rounded="lg"
        v-model="form.name"
        :rules="form.rules.nameRules"
      ></v-text-field>
      <v-text-field
        v-model="form.email"
        label="E-mail"
        variant="outlined"
        rounded="lg"
        prepend-inner-icon="mdi-email-outline"
        :rules="form.rules.emailRules"
        class="mt-3"
      ></v-text-field>
      <v-text-field
        v-model="form.document"
        label="Documento"
        variant="outlined"
        rounded="lg"
        :rules="form.rules.documentRules"
        class="mt-3"
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        label="Senha"
        variant="outlined"
        rounded="lg"
        append-inner-icon="mdi-eye-outline"
        prepend-inner-icon="mdi-lock"
        :rules="form.rules.passwordRules"
        class="mt-3"
        :type="form.isVisible ? 'text' : 'password'"
        @click:append-inner="form.isVisible = !form.isVisible"
      ></v-text-field>
      <v-text-field
        v-model="form.confirmPass"
        label="Confirmar senha"
        variant="outlined"
        rounded="lg"
        append-inner-icon="mdi-eye-outline"
        prepend-inner-icon="mdi-lock"
        :rules="form.rules.confirmPassRules"
        :type="form.isVisible ? 'text' : 'password'"
        @click:append-inner="form.isVisible = !form.isVisible"
        class="mt-3"
      ></v-text-field>

      <div class="d-flex flex-column text-center">
        <span>
          Ao continuar, você concorda com o Termos de serviço da Boli e
          Políticas de privacidade.
        </span>
        <span class="mt-3">
          Já possui uma conta?
          <b class="text-primary pointer" @click="navigate()">Login</b>
        </span>
      </div>

      <v-btn
        color="primary"
        variant="flat"
        class="w-100 mt-5"
        rounded="lg"
        size="x-large"
        @click="validateForm()"
      >
        <span class="text-white"> Criar conta </span>
      </v-btn>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { ICreateAccount } from "../types/create-account.interface";

import { createAccount } from "../services/http.service";
export default {
  name: "card-create-account-component",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPass: "",
        document: "",
        isVisible: false,
        rules: {
          emailRules: [(email: string) => !!email || "E-mail is required"],
          passwordRules: [(email: string) => !!email || "Password is required"],
          confirmPassRules: [
            (email: string) => !!email || "Confirm password is required",
          ],
          documentRules: [(email: string) => !!email || "Document is required"],
          nameRules: [(email: string) => !!email || "Name is required"],
        },
      },
    };
  },
  mounted() {
    document.title = "Criar conta";
  },

  methods: {
    navigate() {
      this.$router.push({ name: "login" });
    },

    async validateForm() {
      const { valid } = await (this.$refs as any).form.validate();
      console.log(valid);

      if (!valid) {
        return;
      }

      const payload: ICreateAccount = {
        document: this.form.document,
        email: this.form.email,
        password: this.form.password,
        name: this.form.name,
        profile: "aluno",
      };

      const data = await createAccount(payload);
      if (data) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
