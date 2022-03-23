<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <main-component :person="person" class="parent-class" />
  <!--// online add class if
  there is only one tag -->
  <button
    @click="
      () => {
        person.age++;
      }
    "
  >
    Increment Age
  </button>
  <!-- <condition-component /> -->
  <form-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from './components/MainComponent.vue';
import FormComponent from './components/FormComponent.vue';

// import ConditionComponent from './components/ConditionComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainComponent,
    FormComponent
    // ConditionComponent
  },
  data() {
    return {
      person: { name: 'Quang', age: 20 }
    };
  }
});
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
