import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component("vnode", {
  functional: true,
  render(h, context) {
    return context.props.node;
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
