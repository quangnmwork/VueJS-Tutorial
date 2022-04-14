<template>
  <input
    type="text"
    :value="props.query"
    @input="$emits('change', $event.target.value)"
  />
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props =
  defineProps<{ query: string }>(); /* eslint-disable func-call-spacing */
const emits = defineEmits<{ (event: 'change', query: string): void }>();
</script>
