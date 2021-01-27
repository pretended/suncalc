import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import Calculator from "@/views/Calculator";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
    meta: {
      title: "Home Page",
      metaTags: [
        {
          name: "description",
          content: "extraterrestrial radiation app"
        },
        {
          property: "og:description",
          content: "extraterrestrial radiation app"
        }
      ]
    },
    children: [
      {
        path: "",
        name: "Calculator",
        component: Calculator
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const DEFAULT_TITLE = "Sun Calc";
router.afterEach(to => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
export default router;
