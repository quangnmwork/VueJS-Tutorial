<template>
  <form @submit.prevent="">
    <input v-model.lazy="inputText" placeholder="Input some text" />
    <p>Current Input {{ inputText }}</p>
    <select v-model="selectedValue">
      <option
        v-for="option in optionValue"
        :key="option.id"
        :value="option.value"
        :id="option.id"
      >
        {{ option.value }}
      </option>
    </select>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IOption } from './IType/ITypes';

export default defineComponent({
  name: 'FormComponent',
  data() {
    return {
      inputText: '' as String,
      optionValue: [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' }
      ] as IOption[],
      selectedValue: '' as String
    };
  }
});
</script>
