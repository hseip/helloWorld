<template>
<div>
<GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
  />
</div>
</template>
<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
    data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: null,
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  },
  mounted() {
    fetch('http://localhost:3000/api')
    .then(response => response.json())
    .then(response => {
      this.chartData = response.chartData
      console.log(response)
    })
  }
}
</script>
<style>
</style>