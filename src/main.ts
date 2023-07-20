/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import axios from "axios";
import VueDatePicker from '@vuepic/vue-datepicker';

const app = createApp(App).component("VueDatePicker", VueDatePicker);

registerPlugins(app);

app.mount("#app");

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {}
);
