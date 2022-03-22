<template>
  <div class="hello">{{ personInfo }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPerson } from './IType/ITypes';
export default defineComponent({
  name: 'MainComponent',
  props: {
    person: {
      type: Object as PropType<IPerson>,
      required: true
    }
  },
  computed: {
    personInfo() {
      return this.person.name + ' ' + this.person.age;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
