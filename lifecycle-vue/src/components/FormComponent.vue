<template>
  <form @submit.prevent="">
    <input v-model="inputText" placeholder="Input some text" ref="input" />
    <p>Answer : {{ answer }}</p>
    <!-- <select v-model="selectedValue">
      <option
        v-for="option in optionValue"
        :key="option.id"
        :value="option.value"
        :id="option.id"
      >
        {{ option.value }}
      </option>
    </select> -->
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
      answer: '' as String,
      optionValue: [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' }
      ] as IOption[],
      selectedValue: '' as String
    };
  },
  mounted() {
    // console.log(this.$refs.input);
  },
  watch: {
    inputText: {
      handler(newInputText: String, oldInputText: String) {
        console.log(newInputText, oldInputText);
        if (newInputText.includes('?')) {
          this.getAwnser();
        }
        if (!newInputText.length) {
          this.answer = '';
        }
      },
      deep: true
    }
  },
  methods: {
    async getAwnser() {
      this.answer = 'Waiting for respond......';
      try {
        const res = await fetch('https://yesno.wtf/api');
        this.answer = (await res.json()).answer;
      } catch (err) {
        this.answer = 'The answer does not response , please retry';
      }
    }
  }
});
</script>
