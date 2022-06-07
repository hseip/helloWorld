<template>
  <q-page>
    <h5 class="text-center">Student Survey: Top {{ counter }} favorite job titles</h5>
    <div class="row">
      <div class="col-6">
          <!-- buttons-->
          <div class="flex flex-center vertical">
            <div>
              <q-btn color="primary q-mx-sm" @click="increment">Increment</q-btn>
              <q-btn color="primary q-mx-sm" @click="decrement">Decrement</q-btn>
            </div>
            <p class="q-mt-md large-font">{{ counter }}</p>
            <q-input class="bg-yellow large-font" v-model="counter" label="Counter" />
          </div>
      </div>
      <div class="col-6">
        <!-- chart -->
        <my-chart
          :inputTop="counter"
          @setTop="setTop"
        ></my-chart>
      </div>
    </div>
    <div style="height:300px;">
      <div v-if="counter%2" class="flex flex-center vertical">
        <h6>Jon smiles on odd numbers only</h6>
        <q-img src="~assets/Jon-Mannion.jpeg" width="200px"></q-img>
      </div>
    </div>
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
    },
    decrement () {
      this.counter--
    },
    setTop (query) {
      this.counter = query.top
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