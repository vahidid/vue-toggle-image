import Vue from "vue";
import VueToogleImage from "./VueToggleImage.vue";

const Components = {
  VueToogleImage,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
