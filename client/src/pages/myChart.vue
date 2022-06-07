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
  props: ['inputTop'],
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [],
      top: 5,
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
  watch: {
    inputTop () {
      this.top = this.inputTop
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      const query = { top: this.top }
      this.$emit('setTop', query)
      fetch(process.env.SERVER_URL + '/api?' + new URLSearchParams(query))
      .then(response => response.json())
      .then(chartData => {
        this.chartData = []
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
  },
  mounted() {
    if (typeof this.$route.params.top !== 'undefined') {
      if (this.$route.params.top !== '') {
       this.top = this.$route.params.top 
      }
    } 
    this.fetchData()
  }
}
</script>
<style>
</style>