<template>
<div>
<GChart
    type="BarChart"
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
      chartData: [],
      defaultTop: 5,
      chartOptions: {
        chart: {
          title: 'BASE students prefered jobs',
          subtitle: 'Statistics based poll 2022',
        },
        backgroundColor: 'transparent',
        legend: { position: 'none'},
        chartArea: { left: 200, top: 0, height: 400, width: 500}
      }
    }
  },
  mounted() {
    let query = {}
    if (typeof this.$route.params.top === 'undefined') {
      query.top = this.defaultTop
    } else {
      query.top = this.$route.params.top !== '' ? this.$route.params.top : this.defaultTop
    }
    
    fetch('http://localhost:3000/api?' + new URLSearchParams(query))
    .then(response => response.json())
    .then(chartData => {
      this.chartData.push(['Job Title', 'Jobs', {role: 'style'}, {role: 'annotation'}])
      for (const jobTitle of chartData) {
        this.chartData.push([
          jobTitle.JobTitleCollection,
          jobTitle.studentcount,
          '#0000ff',
          jobTitle.studentcount
        ])
      }
    })
  }
}
</script>
<style>
</style>