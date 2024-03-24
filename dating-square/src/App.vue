<template>
  <div class="page">
    <div class="title">
      <img
        src="https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403201703409.png"
        class="logo"
        onclick="location.href='https://zhhangbian.github.io/frb2023-display/';"
      />
      <img
        src="https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181053411.png"
        class="slogan"
      />

      旅途多平台相亲
    </div>

    <div class="top">
      <div class="profile_add">
        <div class="profile_input">
          <form @submit.prevent="addProfile">
            <div class="info_title">添加您的匹配条件</div>

            <div class="info_info">
              <div for="name" class="form_type">姓名：</div>
              <input type="text" class="form_enter" v-model="newProfile.name" required />
            </div>

            <div class="info_info">
              <div for="age" class="form_type">年龄：</div>
              <input type="number" class="form_enter" v-model="newProfile.age" required />
            </div>

            <div class="info_info">
              <div for="gender" class="form_type">性别：</div>
              <select class="form_enter" v-model="newProfile.gender" required>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>

            <div class="info_info">
              <div for="hobbies" class="form_type">爱好：</div>
              <input
                type="text"
                class="form_enter"
                placeholder="多个爱好请用逗号分隔"
                v-model="newProfile.hobbiesStr"
                required
              />
            </div>

            <div class="info_button">
              <div class="info_company_title">添加的公司：</div>
              <select class="info_company_select" v-model="newProfile.company" required>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
                <option value="4">D</option>
              </select>

              <button type="submit" class="info_add_button">添加</button>
            </div>
          </form>
        </div>

        <div class="profile_match">
          <div class="match_term">
            <div class="match_name">匹配率：</div>
            <div class="match_value">
              {{ matcher.rate }}
            </div>
          </div>

          <div class="match_term">
            <div class="match_name">数据公司：</div>
            <div class="match_value">
              {{ matcher.source_company }}
            </div>
          </div>

          <div class="match_term">
            <div class="match_name">姓名：</div>
            <div class="match_value">
              {{ matcher.name }}
            </div>
          </div>

          <div class="match_term">
            <div class="match_name">年龄：</div>
            <div class="match_value">
              {{ matcher.age }}
            </div>
          </div>

          <div class="match_term" id="match_button_term">
            <input type="button" class="match_button" value="点击了解更多" @click="searchProfile" />
          </div>
        </div>
      </div>

      <div class="company_profile">
        <div class="candidate_profile" id="company_1">
          <div class="profile_title">相亲公司A</div>

          <div class="profile_info">
            <div v-for="profile in profiles_1" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image" />

              <div class="profile_text">
                <div class="profile_name">
                  {{ profile.name }}
                </div>

                <div class="profile_item">
                  <div class="profile_type">年龄：</div>
                  <div class="profile_value">
                    {{ profile.age }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">性别：</div>
                  <div class="profile_value">
                    {{ profile.gender }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">爱好：</div>
                  <div class="profile_value">
                    {{ profile.hobbies.join(', ') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="candidate_profile" id="company_2">
          <div class="profile_title">相亲公司B</div>

          <div class="profile_info">
            <div v-for="profile in profiles_2" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image" />

              <div class="profile_text">
                <div class="profile_name">
                  {{ profile.name }}
                </div>

                <div class="profile_item">
                  <div class="profile_type">年龄：</div>
                  <div class="profile_value">
                    {{ profile.age }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">性别：</div>
                  <div class="profile_value">
                    {{ profile.gender }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">爱好：</div>
                  <div class="profile_value">
                    {{ profile.hobbies.join(', ') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="candidate_profile" id="company_3">
          <div class="profile_title">相亲公司C</div>

          <div class="profile_info">
            <div v-for="profile in profiles_3" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image" />

              <div class="profile_text">
                <div class="profile_name">
                  {{ profile.name }}
                </div>

                <div class="profile_item">
                  <div class="profile_type">年龄：</div>
                  <div class="profile_value">
                    {{ profile.age }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">性别：</div>
                  <div class="profile_value">
                    {{ profile.gender }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">爱好：</div>
                  <div class="profile_value">
                    {{ profile.hobbies.join(', ') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="candidate_profile" id="company_4">
          <div class="profile_title">相亲公司D</div>

          <div class="profile_info">
            <div v-for="profile in profiles_4" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image" />

              <div class="profile_text">
                <div class="profile_name">
                  {{ profile.name }}
                </div>

                <div class="profile_item">
                  <div class="profile_type">年龄：</div>
                  <div class="profile_value">
                    {{ profile.age }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">性别：</div>
                  <div class="profile_value">
                    {{ profile.gender }}
                  </div>
                </div>

                <div class="profile_item">
                  <div class="profile_type">爱好：</div>
                  <div class="profile_value">
                    {{ profile.hobbies.join(', ') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="planet">
        <div class="planet_title">匹配星球</div>

        <div class="planet_motion">
          <canvas class="planet_canvas" ref="canvas" style="height: 100%; width: 100%"></canvas>
        </div>
      </div>

      <div class="chart">
        <div class="chart_area" id="chart_count">
          <div class="chart_title">访问人数变化</div>

          <div class="count_chart" ref="chart_count"></div>
        </div>

        <div class="chart_area" id="chart_rate">
          <div class="chart_title">访问年龄占比</div>

          <div class="rate_chart" id="rate_chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      profiles_1: [
        {
          id: 1,
          name: '小a',
          age: 28,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125928.jpg'
        },
        {
          id: 2,
          name: '小b',
          age: 25,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125929.jpg'
        },
        {
          id: 3,
          name: '小c',
          age: 30,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125930.jpg'
        },
        {
          id: 4,
          name: '小d',
          age: 27,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125931.jpg'
        }
      ],

      profiles_2: [
        {
          id: 5,
          name: '小e',
          age: 22,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125932.jpg'
        },
        {
          id: 6,
          name: '小f',
          age: 26,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125933.jpg'
        },
        {
          id: 7,
          name: '小g',
          age: 23,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125934.jpg'
        },
        {
          id: 8,
          name: '小h',
          age: 37,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125935.jpg'
        }
      ],

      profiles_3: [
        {
          id: 9,
          name: '小i',
          age: 48,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125936.jpg'
        },
        {
          id: 10,
          name: '小j',
          age: 15,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125937.jpg'
        },
        {
          id: 11,
          name: '小k',
          age: 26,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125938.jpg'
        },
        {
          id: 12,
          name: '小l',
          age: 11,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125939.jpg'
        }
      ],

      profiles_4: [
        {
          id: 13,
          name: '小m',
          age: 54,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125940.jpg'
        },
        {
          id: 14,
          name: '小n',
          age: 35,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125942.jpg'
        },
        {
          id: 15,
          name: '小o',
          age: 31,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125941.jpg'
        },
        {
          id: 16,
          name: '小p',
          age: 22,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image:
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125943.jpg'
        }
      ],

      newProfile: {
        name: '',
        age: null,
        gender: '',
        hobbiesStr: '',
        company: 0
      },

      matcher: {
        rate: '0%',
        source_company: 'not match yet',
        name: 'not match yet',
        age: 'not match yet'
      },

      company_list: ['公司A', '公司B', '公司C', '公司D'],
      name_list: ['大A', '大B', '大C', '大D', '大E'],
      age_init: 18,

      width: 0,
      height: 0,
      rotation: 0,

      dots: [],
      dotNum: 1000,
      dotRadius: 3,
      dotColors: [],

      planetRadius: 0,
      planetX: 0,
      planetY: 0,
      planetZ: 0,
      FIELD_OF_VIEW: 0,

      resizeTimeout: null,

      chart_count: null,
      option_count_chart: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          type: 'scroll',
          top: '4%',
          data: ['18-25', '25-30', '30-40', '40-50', '50+'],
          textStyle: {
            fontSize: 15
          },
          inactiveColor: {
            color: 'rgba(119, 136, 153, 0.5)'
          },
          pageIconColor: 'rgba(21, 112, 174, 1)',
          pageTextStyle: {
            color: 'rgba(255, 255, 255, 1)'
          }
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
          nameTextStyle: {
            fontSize: 20,
            color: 'rgba(0, 0, 0, 1)'
          }
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            fontSize: 20,
            color: 'rgba(0, 0, 0, 1)'
          }
        },
        series: [
          {
            name: '18-25',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            lineStyle: {
              width: 4,
              type: 'dashed'
            },
            symbolSize: 12
          },
          {
            name: '25-30',
            type: 'line',
            stack: 'Total',
            data: [920, 1082, 991, 934, 990, 1330, 1310],
            lineStyle: {
              width: 4,
              type: 'dashed'
            },
            symbolSize: 12
          },
          {
            name: '30-40',
            type: 'line',
            stack: 'Total',
            data: [650, 732, 801, 754, 790, 830, 910],
            lineStyle: {
              width: 4,
              type: 'dashed'
            },
            symbolSize: 12
          },
          {
            name: '40-50',
            type: 'line',
            stack: 'Total',
            data: [620, 532, 701, 634, 890, 530, 520],
            lineStyle: {
              width: 4,
              type: 'dashed'
            },
            symbolSize: 12
          },
          {
            name: '50+',
            type: 'line',
            stack: 'Total',
            data: [720, 632, 701, 634, 790, 730, 810],
            lineStyle: {
              width: 4,
              type: 'dashed'
            },
            symbolSize: 12
          }
        ]
      },

      chart_rate: null,
      option_rate_chart: {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: false
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问年龄占比',
            type: 'pie',
            radius: [10, 120],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 50
            },
            data: [
              { value: 340, name: '18-25' },
              { value: 438, name: '25-30' },
              { value: 232, name: '30-40' },
              { value: 290, name: '40-50' },
              { value: 290, name: '50-60' },
              { value: 230, name: '60+' }
            ],
            label: {
              position: 'inner',
              alignTo: 'none',
              fontSize: 15,
              bleedMargin: 10
            },
            labelLine: {
              smooth: 0.2,
              length: 10,
              length2: 20
            },

            animationType: 'scale',
            animationEasing: 'elasticOut'
          }
        ]
      }
    }
  },

  mounted() {
    this.initPlanet()
    this.createDots()
    this.renderScene()
    window.addEventListener('resize', this.resizePlanet)

    this.initChart_count()
    window.addEventListener('resize', this.resizeChart_count)

    this.initChart_rate()
    window.addEventListener('resize', this.resizeChart_rate)
  },

  methods: {
    addProfile() {
      const id =
        this.profiles_1.length +
        this.profiles_2.length +
        this.profiles_3.length +
        this.profiles_4.length +
        1
      const hobbies = this.newProfile.hobbiesStr.split(',').map((hobby) => hobby.trim())

      let newProfile = {
        id: id,
        name: this.newProfile.name,
        age: this.newProfile.age,
        gender: this.newProfile.gender,
        hobbies: hobbies,
        image: '',
        company: this.newProfile.company
      }

      switch (this.newProfile.name) {
        case '张栗瑞':
        case 'zlr':
          newProfile.name = '最帅的lrgg'
          newProfile.age = 18
          newProfile.gender = '最帅的男人'
          newProfile.hobbies = ['你']
          newProfile.image =
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403021612148.png'
          break
        case '卞卓航':
        case 'bzh':
          newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgUCGi.png'
          break
        case '廖鹏飞':
        case 'lpf':
          newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgUwIX.png'
          break
        case '梁锦程':
        case 'ljc':
          newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgWTsY.jpg'
          break
        case '林舒雅':
        case 'lsy':
          newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgWBgU.png'
          break
        case '童欣':
        case 'tx':
          newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgW5Wp.png'
          break
        default:
          newProfile.image =
            'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403172311289.png'
          break
      }

      if (newProfile.company == 1) {
        this.profiles_1.push(newProfile)
      } else if (newProfile.company == 2) {
        this.profiles_2.push(newProfile)
      } else if (newProfile.company == 3) {
        this.profiles_3.push(newProfile)
      } else if (newProfile.company == 4) {
        this.profiles_4.push(newProfile)
      }

      // 清空表单
      this.newProfile.name = ''
      this.newProfile.age = 18
      this.newProfile.gender = ''
      this.newProfile.hobbiesStr = ''
    },

    searchProfile() {
      this.matcher.rate = (Math.random() * (95 - 60) + 60).toFixed(2) + '%'
      this.matcher.source_company =
        this.company_list[Math.floor(Math.random() * this.company_list.length)]
      this.matcher.name = this.name_list[Math.floor(Math.random() * this.name_list.length)]
      //this.matcher.age = '我刚满' + (++this.age_init) + '岁'
      if (this.age_init >= 60) {
        this.age_init = 18
      }
      this.matcher.age = this.age_init++
    },

    initChart_count() {
      this.chart_count = echarts.init(this.$refs.chart_count, null, {
        renderer: 'canvas',
        useDirtyRect: false
      })
      this.chart_count.setOption(this.option_count_chart)
    },

    resizeChart_count() {
      if (this.chart_count) {
        this.chart_count.resize()
      }
    },

    initChart_rate() {
      const dom_rate = document.getElementById('rate_chart')
      this.chart_rate = echarts.init(dom_rate, null, {
        renderer: 'canvas',
        useDirtyRect: false
      })
      if (this.option_rate_chart && typeof this.option_rate_chart === 'object') {
        this.chart_rate.setOption(this.option_rate_chart)
      }
    },

    resizeChart_rate() {
      this.chart_rate.resize()
    },

    initPlanet() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight

      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2
        canvas.height = canvas.clientHeight * 2
        ctx.scale(2, 2)
      }

      this.planetRadius = this.height * 0.6
      this.planetZ = -this.planetRadius
      this.planetX = this.width / 2
      this.planetY = this.height / 2
      this.FIELD_OF_VIEW = this.width * 0.8
    },

    createDots() {
      this.dots = []
      this.dotColors = []
      for (let i = 0; i < this.dotNum; i++) {
        const theta = Math.random() * 2 * Math.PI
        const phi = Math.acos(Math.random() * 2 - 1)
        const x = this.planetRadius * Math.sin(phi) * Math.cos(theta)
        const y = this.planetRadius * Math.sin(phi) * Math.sin(theta)
        const z = this.planetRadius * Math.cos(phi) + this.planetZ
        const color = this.generateRandomColor()
        this.dots.push({ x, y, z })
        this.dotColors.push(color)
      }
    },

    renderScene() {
      const ctx = this.$refs.canvas.getContext('2d')
      ctx.clearRect(0, 0, this.width, this.height)
      this.rotation += 0.002
      const sineRotation = Math.sin(this.rotation)
      const cosineRotation = Math.cos(this.rotation)
      for (let i = 0; i < this.dots.length; i++) {
        const color = this.dotColors[i]
        this.drawDot(ctx, this.dots[i], sineRotation, cosineRotation, color)
      }
      window.requestAnimationFrame(this.renderScene)
    },

    generateRandomColor() {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgb(${r},${g},${b})`
    },

    drawDot(ctx, dot, sin, cos, color) {
      const rotX = cos * dot.x + sin * (dot.z - this.planetZ)
      const rotZ = -sin * dot.x + cos * (dot.z - this.planetZ) + this.planetZ
      const sizeProjection = this.FIELD_OF_VIEW / (this.FIELD_OF_VIEW - rotZ)
      const xProject = rotX * sizeProjection + this.planetX
      const yProject = dot.y * sizeProjection + this.planetY
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(xProject, yProject, this.dotRadius * sizeProjection, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    },

    afterResize_planet() {
      this.width = this.$refs.canvas.offsetWidth
      this.height = this.$refs.canvas.offsetHeight
      if (window.devicePixelRatio > 1) {
        this.$refs.canvas.width = this.$refs.canvas.clientWidth * 2
        this.$refs.canvas.height = this.$refs.canvas.clientHeight * 2
      } else {
        this.$refs.canvas.width = this.width
        this.$refs.canvas.height = this.height
      }
      this.planetRadius = this.width * 0.6
      this.planetZ = -this.planetRadius
      this.planetX = this.width / 2
      this.planetY = this.height / 2
      this.FIELD_OF_VIEW = this.width * 0.8
      this.createDots()
    },

    resizePlanet() {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(this.afterResize_planet, 500)
    }
  }
}
</script>

<style scoped>
@import url(assets/css/profile.css);
@import url(assets/css/planet.css);
@import url(assets/css/chart.css);
@import url(assets/css/frame.css);
</style>
