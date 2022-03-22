<template>
  <div>
    <p>Your current number is : {{ number }}</p>
    <p v-if="number < 20">You are too young</p>
    <p v-else-if="number > 20">You are too old</p>
    <p v-else>Yes you are</p>
    <p v-show="number > 20">Hi Im your uncle</p>
    <button @click.once="randomAge()">Random your age</button>
    <p>History</p>
    <ul>
      <li v-for="(eleHistory, index) in history" :key="index">
        <p :class="eleHistory > 20 ? 'isOld' : 'isYoung'">{{ eleHistory }}</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ConditionComponent',
  data() {
    return {
      number: 20 as Number,
      history: [] as Number[]
    };
  },
  methods: {
    randomAge() {
      const randomNumber = Math.floor(Math.random() * 100);
      this.number = randomNumber;
      this.history.push(this.number);
    }
  }
});
</script>
<style scoped>
.isOld {
  color: brown;
}
.isYoung {
  color: aqua;
}
</style>
