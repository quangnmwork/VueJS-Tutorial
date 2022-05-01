<template>
  <div class="btn-group">
    <button class="btn" @click="onAdd">Insert</button
    ><button class="btn" @click="onShuffle">Shuffle</button
    ><button class="btn" @click="onDelete">Delete some one</button>
  </div>
  <TransitionGroup name="fade" class="container">
    <div class="item" v-for="item in array" :key="item">{{ item }}</div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import lodash from "lodash";

const initArray = () => [1, 2, 3, 4, 5];
const array = ref(initArray());

const onAdd = () => {
  array.value.push(Math.round(Math.random() * array.value.length));
};
const onShuffle = () => {
  array.value = lodash.shuffle(array.value);
};
const onDelete = () => {
  array.value = lodash.dropRight(array.value);
};
</script>

<style lang="scss">
.btn-group {
  display: flex;
}
.btn {
  padding: 5px 10px;
}
.container {
  display: flex;
  flex-direction: column;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 1;
  transform: scaleY(1.6) translate(30px, -20px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>

