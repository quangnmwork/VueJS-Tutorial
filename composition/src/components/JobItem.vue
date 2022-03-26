<template>
  <div class="job-item">
    <div class="job-item__heading">{{ props.args.title }}</div>
    <p class="job-item__des">{{ props.args.description }}</p>
    <div class="job-item__button">
      <button @click="emits('alert')">Change Style</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IJobItem } from './../IType/IType';
import { defineProps, defineEmits } from 'vue';
interface IProp {
  args: IJobItem;
}
// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{ (e: 'alert'): void }>();
const props = defineProps<IProp>();
</script>
<style scoped>
.job-item {
  width: 50%;
  border: 1px solid black;
  margin: auto;
  box-shadow: 1px 1px 0.5px black;
  padding: 10px 5px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-top: 10px;
  background-color: rgb(71, 255, 215);
}
.job-item__heading {
  font-size: 30px;
}
.job-item__des {
  font-style: italic;
}
.job-item__button {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
</style>
