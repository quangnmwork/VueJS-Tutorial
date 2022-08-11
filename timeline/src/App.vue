<script setup lang="ts">
import { zones } from "./composables/state";
</script>

<template>
  <div border="~ gray/20" m2 p2>
    <ActionBar />

    <pre>{{ zones }}</pre>
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>

