<template>
  <div id="app">
    <VueToggleImage @onChange="onChangeToggle">
      <img src="./assets/1920px-Flag_of_Iran.svg.png" />
      <img src="./assets/bb4d485d.png" />
    </VueToggleImage>
  </div>
</template>

<script>
import VueToggleImage from "./components/VueToggleImage.vue";

export default {
  name: "App",
  components: {
    VueToggleImage,
  },
  methods: {
    onChangeToggle(e) {
      console.log(e);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 200px;
}
</style>
