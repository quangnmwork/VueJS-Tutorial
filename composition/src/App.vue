<template>
  <div />
  <JobItem :args="data" />
</template>
<script lang="ts" setup>
import JobItem from './components/JobItem.vue';
const data = { title: 'Next', description: '123' };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
