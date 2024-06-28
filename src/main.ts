import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

/* import styles */
import "@/assets/styles/main.css";

/* import font awesome loader */
import { FontAwesomeIcon } from "@/utils/faIconsLoader";

const app = createApp(App);

app.use(createPinia());
app.use(router);

/* add custom components */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
