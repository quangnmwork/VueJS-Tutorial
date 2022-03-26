<template>
  <div>{{ props.args.title }}</div>
  <div>{{ props.args.description }}</div>
</template>
<script setup lang="ts">
import { IJobItem } from './../IType/IType';
import { defineProps } from 'vue';
interface IProp {
  args: IJobItem;
}
const props = defineProps<IProp>();
console.log(props.args);
</script>
