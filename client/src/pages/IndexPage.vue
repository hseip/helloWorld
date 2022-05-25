<template>
  <q-page class="flex flex-center vertical">
    <q-btn color="primary" @click="increment">Add</q-btn>
    <p class="q-mt-md large-font">{{ counter }}</p>
    <q-input class="bg-yellow large-font" v-model="counter" label="Counter" />
    <my-chart></my-chart>
  </q-page>
</template>

<script>
import myChart from './myChart'
export default {
  name: 'IndexPage',
  components: {
    myChart
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter++
    }
  }
}
</script>
<style>
.vertical {
  flex-direction: column;
}
.large-font {
  font-size: 32px;
}
</style>