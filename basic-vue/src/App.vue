<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button class="btn-app" v-bind="objectAtributes">Click here</button>
  <HelloWorld msg="<span style='color:red'>Hello world</span>" />
  <p v-bind:title="toTitle()">Functioncall</p>
  <button @click="showAlert()">Dont touch me</button>
  <form @submit.prevent="showInfo(isShowMessage)"><button>Submit</button></form>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      isShowMessage: true,
      objectAtributes: { id: 'btn-app', disabled: true },
      toTitle() {
        return 'hello';
      }
    };
  },
  methods: {
    showAlert: () => {
      alert('Don touch me');
    },
    showInfo: (isShowMessage) => {
      alert(isShowMessage);
    }
  }
};
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
