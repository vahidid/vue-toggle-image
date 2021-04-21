<template>
  <div class="vue-toggle-container">
    <div
      class="item"
      v-for="(child, index) in this.$slots.default"
      :class="index === active ? 'active' : ''"
      :key="index"
      @click="changeActive(index)"
    >
      <vnode :node="child" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    changeActive(index) {
      this.$emit("onChange", index);
      this.active = index;
    },
  },
};
</script>

<style>
.vue-toggle-container {
  display: flex;
  background-color: #016d5d;
  border-radius: 15px;
  border: 5px solid #065b4e;
}
.vue-toggle-container .item {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* margin: 7px; */
  padding: 10px;
  border-radius: 10px;
  opacity: 0.5;
}
.vue-toggle-container .item:hover {
  cursor: pointer;
}
.vue-toggle-container .item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.vue-toggle-container .active {
  background: #06b79c;
  opacity: 1;
}
</style>
