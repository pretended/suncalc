import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1400c1",
        secondary: "#b0c4ff",
        accent: "#4b68ff",
        error: "#b71c1c",
        background: "#F5F5F5"
      },
      dark: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        background: "#2b2b2b"
      }
    }
  }
});

export default vuetify;
