<script setup lang="ts">
import Fuse from "fuse.js";
import { Timezone } from "../types";

const fuse = new Fuse(timezones, { keys: ["name"] });

let input = $ref("");
let index = $ref(0);

const inputNormal = ref("");
// console.log(input, inputNormal);

const searchResult = computed(() => {
  return fuse.search(input);
});

function onEnter() {}
function add(t: Timezone) {
  addToTimeZone(t);
  input = "";
  index = 0;
}
</script>

<template>
  <div relative>
    <input
      type="text"
      v-model="input"
      @keydown.enter="onEnter"
      placeholder="Search timezone..."
      p="x3 y2"
      text-xl
      border="~ base rounded"
      bg-transparent
      w-full
    />
    <div absolute top-full right-0 bg-gray-900 w-full v-show="input">
      <button
        v-for="i of searchResult"
        :key="i.refIndex"
        @click="add(i.item)"
        block
        w-full
        px2
        pb1
        hover="bg-gray/5"
        border="b base"
      >
        {{ i.item.name }}
      </button>
    </div>
  </div>
</template>

<style></style>
