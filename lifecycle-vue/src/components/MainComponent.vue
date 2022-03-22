<template>
  <div :class="$attrs.class">{{ personInfo }}</div>
  <p :class="$attrs.class"></p>
  <!-- <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div> -->
  <!-- Auto-prefixing styles in vue-->
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
  },
  mounted() {
    console.log('Main component is mounted');
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
