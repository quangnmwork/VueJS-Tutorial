<template>
  <label>
    <input type="radio" v-model="activeComponent" v-bind:value="compAVue" />A
  </label>
  <label>
    <input type="radio" v-model="activeComponent" v-bind:value="compBVue" />B
  </label>
  <Transition name="custom">
    <component :is="activeComponent"></component>
  </Transition>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

import compAVue from "./components/compA.vue";
import compBVue from "./components/compB.vue";
const activeComponent = shallowRef(compAVue);
</script>

<style lang="scss">
.custom-enter-from {
  font-size: 15px;
}
.custom-enter-to {
  font-size: 50px;
}
.custom-enter-active {
  transition: opacity 0.5s ease;
}
.custom-leave-from {
  font-size: 50px;
}
.custom-leave-to {
  font-size: 12px;
}
.custom-leave-active {
  transition: opacity 2s ease;
}
</style>

