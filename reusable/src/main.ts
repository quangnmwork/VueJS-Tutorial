import { createApp } from "vue";
import App from "./App.vue";

const VueApp = createApp(App);
VueApp.directive("bold", {
  mounted: (el, binding) => {
    if (binding.value == "primary") {
      el.style.color = "blue";
    } else {
      el.style.color = "red";
    }
  },
});
VueApp.mount("#app");

