<template>
  <div>
    echart -line
    <div ref="line" class="echart-line">
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: 'LxEchartLine',
  data() {
    return {}
  },
  mounted() {
    var myChart = echarts.init(this.$refs.line)
    var option;
    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (val) {
            console.log(val)
            return 'var K'
          }
        }
      },
      series: [
        {
          data: [130, 210, 204, 198, 125, 127, 240],
          type: 'line',
          showSymbol: false,
          smooth: true
        },
        {
          data: [null, null, null, null, 135, 147, 260],
          type: 'line',
          smooth: true,
          lineStyle: {
            type: "dashed"
          }
        },
        {
          data: [150, 230, 224, 218, 135, null, null],
          type: 'line',
          showSymbol: false,
          smooth: true
        }
      ]
    };

    myChart.setOption(option);
  }
}
</script>

<style>
  .echart-line{
    width: 1000px;
    height: 300px;
  }
</style>