import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add();

const app = createApp(App);

app.use(createPinia());
app.use(router);

/* add custom components */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
