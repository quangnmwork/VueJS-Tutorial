<template>
  <JobItem
    v-for="jobItem in props.args"
    :key="jobItem.title"
    :args="jobItem"
  ></JobItem>
</template>
<script setup lang="ts">
import JobItem from './JobItem.vue';
import { IJobItem } from './../IType/IType';
import { defineProps } from 'vue';
interface IProp {
  args: IJobItem[];
}
const props = defineProps<IProp>();
</script>
