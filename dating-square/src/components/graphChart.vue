<template>
  <div ref="chart" class="graphChart"></div>
</template>






<script>

export default {
  name: 'GraphChart',
  props: {
    rootPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      myChart: null,
      option: null,
      webkitDep: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.chart);
      this.myChart.showLoading();

      this.fetchData(this.rootPath).then(webkitDep => {
        this.myChart.hideLoading();
        this.webkitDep = webkitDep;
        this.setChartOption();
      });
    },
    fetchData(rootPath) {
      return new Promise((resolve, reject) => {
        $.get(rootPath + '/data/asset/data/webkit-dep.json', data => {
          if (data && data.nodes) { // 确保数据对象和nodes属性都存在
            resolve(data);
          } else {
            reject('Data is not in the expected format or is empty.');
          }
        });
      });
    },
    setChartOption() {
      this.option = {
        legend: {
          data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            draggable: true,
            data: this.webkitDep.nodes.map((node, idx) => {
              node.id = idx;
              return node;
            }),
            categories: this.webkitDep.categories,
            force: {
              edgeLength: 5,
              repulsion: 20,
              gravity: 0.2
            },
            edges: this.webkitDep.links
          }
        ]
      };
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
.graphChart {
  width: 100%;
  height: 100%;
}
</style>