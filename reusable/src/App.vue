<template>
  <p>Current Coordinate is : {{ x }},{{ y }}</p>
  <p v-bold="`primary`">Guys</p>
</template>

<script lang="ts" setup>
import { onMouseMove } from "./composable/mouse";

const { x, y } = onMouseMove();
</script>

<style lang="scss"></style>

