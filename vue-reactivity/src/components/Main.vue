<template>
  <div class="hello">{{ msg }},{{ luckyNumber }}</div>
  <button @click="increment()">Increment</button>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'MainComponent',
  props: {
    msg: String
  },
  data() {
    return {
      luckyNumber: 1
    };
  },
  methods: {
    increment() {
      this.luckyNumber += 1;
      // nextTick(() => {
      //   this.luckyNumber = 0; // this will keep luckeyNumber = 0 because it always run before update DOM
      // });
    }
  },
  mounted() {
    console.log(this.msg);
    this.luckyNumber = 2;
  }
});
</script>

<style scoped></style>
