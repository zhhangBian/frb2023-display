<template>
  <div class="page">
    <div class="title">
      <img src="https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403201703409.png" class="logo" onclick="location.href='https://zhhangbian.github.io/frb2023-display/';">
      <img src="https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181053411.png" class="solgan">

      旅途多平台相亲
    </div>

    <div class="top">
      <div class="profile_add">
        <div class="profile_input">
          <form @submit.prevent="addProfile">
            <div class="form-title">添加您的匹配条件</div>

            <div class="form-group">
              <div for="name" class="form_type">姓名：</div>
              <input type="text" class="form_enter" v-model="newProfile.name" required>
            </div>

            <div class="form-group">
              <div for="age" class="form_type">年龄：</div>
              <input type="number" class="form_enter" v-model="newProfile.age" required>
            </div>

            <div class="form-group">
              <div for="gender" class="form_type">性别：</div>
              <select class="form_enter" v-model="newProfile.gender" required>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>

            <div class="form-group">
              <div for="hobbies" class="form_type">爱好：</div>
              <input type="text" class="form_enter" placeholder="多个爱好请用逗号分隔" v-model="newProfile.hobbiesStr" required>
            </div>

            <div class="form-button">
              <div class="form_title_button">添加的公司：</div>
              <select class="button_enter" v-model="newProfile.company" required>
                <option value=1>1</option>
                <option value=2>2</option>
                <option value=3>3</option>
                <option value=4>4</option>
              </select>

              <button type="submit" class="form_add_button">添加</button>
            </div>
          </form>
        </div>

        <div class="profile_match">
          <div class="match_term">
            <div class="match_name">
              匹配率：
            </div>
            <div class="match_value">
              {{ matcher.rate }}
            </div>
          </div>

          <div class="match_term">
            <div class="match_name">
              数据公司：
            </div>
            <div class="match_value">
              {{ matcher.source_company }}
            </div>
          </div>

          <div class="match_term">
            <div class="match_name">
              姓名：
            </div>
            <div class="match_value">
              {{ matcher.name }}
            </div>
          </div>

          <div class="match_term">
            <div class="match_name">
              年龄：
            </div>
            <div class="match_value">
              {{ matcher.age }}
            </div>
          </div>


          <div class="match_term" id="match_button_term">
            <input type="button" class="match_button" value="点击了解更多" @click="searchProfile">
          </div>
        </div>

      </div>

      <div class="company_profile">
        <div class="candiate_profile" id="company_1">
          <div class="profile_title">
            相亲公司A
          </div>

          <div class="profile_info">
            <div v-for="profile in profiles_1" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image">

              <div class="profile_name">
                {{ profile.name }}
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  年龄：
                </div>
                <div class="profile_value">
                  {{ profile.age }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  性别：
                </div>
                <div class="profile_value">
                  {{ profile.gender }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  爱好：
                </div>
                <div class="profile_value">
                  {{ profile.hobbies.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="candiate_profile" id="company_2">
          <div class="profile_title">
            相亲公司B
          </div>

          <div class="profile_info">
            <div v-for="profile in profiles_2" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image">

              <div class="profile_name">
                {{ profile.name }}
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  年龄：
                </div>
                <div class="profile_value">
                  {{ profile.age }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  性别：
                </div>
                <div class="profile_value">
                  {{ profile.gender }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  爱好：
                </div>
                <div class="profile_value">
                  {{ profile.hobbies.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="candiate_profile" id="company_3">
          <div class="profile_title">
            相亲公司C
          </div>

          <div class="profile_info">
            <div v-for="profile in profiles_3" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image">

              <div class="profile_name">
                {{ profile.name }}
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  年龄：
                </div>
                <div class="profile_value">
                  {{ profile.age }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  性别：
                </div>
                <div class="profile_value">
                  {{ profile.gender }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  爱好：
                </div>
                <div class="profile_value">
                  {{ profile.hobbies.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="candiate_profile" id="company_4">
          <div class="profile_title">
            相亲公司D
          </div>

          <div class="profile_info">
            <div v-for="profile in profiles_4" :key="profile.id" class="profile_list">
              <img :src="profile.image" class="profile_image">

              <div class="profile_name">
                {{ profile.name }}
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  年龄：
                </div>
                <div class="profile_value">
                  {{ profile.age }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  性别：
                </div>
                <div class="profile_value">
                  {{ profile.gender }}
                </div>
              </div>

              <div class="profile_item">
                <div class="profile_type">
                  爱好：
                </div>
                <div class="profile_value">
                  {{ profile.hobbies.join(', ') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="planet">
        <div class="planet_title">
          匹配星球
        </div>

        <div class="planet_motion">
          <canvas class="planet_canvas" ref="canvas" style="height: 100%; width: 100%;"></canvas>
        </div>
      </div>

      <div class="chart">
        <div class="chart_area" id="chart_count">
          <div class="chart_title">
            访问人数变化
          </div>

          <div class="count_chart" ref="chart_count">
          </div>
        </div>

        <div class="chart_area" id="chart_rate">
          <div class="chart_title">
            访问年龄占比
          </div>

          <div class="rate_chart" id="rate_chart">
          </div>
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
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125928.jpg'
        },
        {
          id: 2,
          name: '小b',
          age: 25,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125929.jpg'
        },
        {
          id: 3,
          name: '小c',
          age: 30,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125930.jpg'
        },
        {
          id: 4,
          name: '小d',
          age: 27,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125931.jpg'
        }
      ],

      profiles_2: [
        {
          id: 5,
          name: '小e',
          age: 22,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125932.jpg'
        },
        {
          id: 6,
          name: '小f',
          age: 26,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125933.jpg'
        },
        {
          id: 7,
          name: '小g',
          age: 23,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125934.jpg'
        },
        {
          id: 8,
          name: '小h',
          age: 37,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125935.jpg'
        }
      ],

      profiles_3: [
        {
          id: 9,
          name: '小i',
          age: 48,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125936.jpg'
        },
        {
          id: 10,
          name: '小j',
          age: 15,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125937.jpg'
        },
        {
          id: 11,
          name: '小k',
          age: 26,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125938.jpg'
        },
        {
          id: 12,
          name: '小l',
          age: 11,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125939.jpg'
        }
      ],

      profiles_4: [
        {
          id: 13,
          name: '小m',
          age: 54,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125940.jpg'
        },
        {
          id: 14,
          name: '小n',
          age: 35,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125942.jpg'
        },
        {
          id: 15,
          name: '小o',
          age: 31,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125941.jpg'
        },
        {
          id: 16,
          name: '小p',
          age: 22,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403181125943.jpg'
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

      company_list: ['北航', '南航', '西航', '东航'],
      name_list: ['大A', '大B', '大C', '大D', '大E'],
      age_init: 18,

      width: 0,
      height: 0,
      rotation: 0,
      dots: [],
      DOTS_AMOUNT: 1000,
      DOT_RADIUS: 3,
      GLOBE_RADIUS: 0,
      GLOBE_CENTER_Z: 0,
      PROJECTION_CENTER_X: 0,
      PROJECTION_CENTER_Y: 0,
      FIELD_OF_VIEW: 0,
      resizeTimeout: null,
      dotColors: [],

      chart_count: null,
      option_count_chart: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          symbol: 'triangle',
          symbolSize: 20,
          lineStyle: {
            color: '#5470C6',
            width: 4,
            type: 'dashed'
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: '#EE6666',
            color: 'yellow'
          }
        }]
      },

      chart_rate: null,
      option_rate_chart: {
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '80%',
            data: [
              {value: 335, name: '18-25'},
              {value: 350, name: '25-30'},
              {value: 274, name: '30-40'},
              {value: 135, name: '40-50'},
              {value: 100, name: '50+'}
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(0, 0, 0, 1)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(0, 0, 0, 1)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#FFDAB9',
              shadowBlur: 1,
              shadowColor: 'rgba(0, 0, 0, 1)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      }
    }
  },

  mounted() {
    this.init()
    this.createDots()
    this.renderScene()
    window.addEventListener('resize', this.onResize)

    this.initChart_count()
    window.addEventListener('resize', this.resizeChart_count)

    this.initChart_rate()
    window.addEventListener('resize', this.resizeChart_rate)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    addProfile() {
      const id = this.profiles_1.length + this.profiles_2.length + this.profiles_3.length + this.profiles_4.length + 1;
      const hobbies = this.newProfile.hobbiesStr.split(',').map(hobby => hobby.trim())

      var newProfile = {
        id: id,
        name: this.newProfile.name,
        age: this.newProfile.age,
        gender: this.newProfile.gender,
        hobbies: hobbies,
        image: '',
        company: this.newProfile.company,
      };

      if (this.newProfile.name == "张栗瑞" || this.newProfile.name == "zlr") {
        newProfile.name = "最帅的lrgg";
        newProfile.age = 18;
        newProfile.gender = "最帅的男人";
        newProfile.hobbies = ["你"];
        newProfile.image = 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403021612148.png';
      } else if (this.newProfile.name == "卞卓航" || this.newProfile.name == "bzh") {
        newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgUCGi.png';
      } else if (this.newProfile.name == "廖鹏飞" || this.newProfile.name == "lpf") {
        newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgUwIX.png';
      } else if (this.newProfile.name == "梁锦程" || this.newProfile.name == "ljc") {
        newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgWTsY.jpg';
      } else if (this.newProfile.name == "林舒雅" || this.newProfile.name == "lsy") {
        newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgWBgU.png';
      } else if (this.newProfile.name == "童欣" || this.newProfile.name == "tx") {
        newProfile.image = 'https://ooo.0x0.ooo/2024/03/17/OgW5Wp.png';
      } else {
        newProfile.image = 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403172311289.png';
      }

      if (newProfile.company == 1) {
        this.profiles_1.push(newProfile);
      } else if (newProfile.company == 2) {
        this.profiles_2.push(newProfile);
      } else if (newProfile.company == 3) {
        this.profiles_3.push(newProfile);
      } else if (newProfile.company == 4) {
        this.profiles_4.push(newProfile);
      }


      // 清空表单
      this.newProfile.name = ''
      this.newProfile.age = null
      this.newProfile.gender = ''
      this.newProfile.hobbiesStr = ''
    },

    searchProfile() {
      this.matcher.rate = (Math.random() * (95 - 60) + 60).toFixed(2) + '%';
      this.matcher.source_company = this.company_list[Math.floor(Math.random() * this.company_list.length)];
      this.matcher.name = this.name_list[Math.floor(Math.random() * this.name_list.length)];
      //this.matcher.age = '我刚满' + (++this.age_init) + '岁'
      if (this.age_init>=60) {
        this.age_init = 18;
      }
      this.matcher.age = this.age_init++;
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

    init() {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      this.width = canvas.clientWidth
      this.height = canvas.clientHeight

      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2
        canvas.height = canvas.clientHeight * 2
        ctx.scale(2, 2)
      }

      this.GLOBE_RADIUS = this.height * 0.6;
      this.GLOBE_CENTER_Z = -this.GLOBE_RADIUS;
      this.PROJECTION_CENTER_X = this.width / 2;
      this.PROJECTION_CENTER_Y = this.height / 2;
      this.FIELD_OF_VIEW = this.width * 0.8;
    },

    createDots() {
      this.dots = [];
      this.dotColors = [];
      for (let i = 0; i < this.DOTS_AMOUNT; i++) {
        const theta = Math.random() * 2 * Math.PI
        const phi = Math.acos((Math.random() * 2) - 1);
        const x = this.GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
        const y = this.GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
        const z = (this.GLOBE_RADIUS * Math.cos(phi)) + this.GLOBE_CENTER_Z;
        const color = this.generateRandomColor();
        this.dots.push({x, y, z});
        this.dotColors.push(color);
      }
    },

    renderScene() {
      const ctx = this.$refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.width, this.height);
      this.rotation += 0.002;
      const sineRotation = Math.sin(this.rotation);
      const cosineRotation = Math.cos(this.rotation);
      for (let i = 0; i < this.dots.length; i++) {
        const color = this.dotColors[i];
        this.drawDot(ctx, this.dots[i], sineRotation, cosineRotation, color);
      }
      window.requestAnimationFrame(this.renderScene);
    },

    generateRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },

    drawDot(ctx, dot, sin, cos, color) {
      const rotX = cos * dot.x + sin * (dot.z - this.GLOBE_CENTER_Z);
      const rotZ = -sin * dot.x + cos * (dot.z - this.GLOBE_CENTER_Z) + this.GLOBE_CENTER_Z;
      const sizeProjection = this.FIELD_OF_VIEW / (this.FIELD_OF_VIEW - rotZ);
      const xProject = (rotX * sizeProjection) + this.PROJECTION_CENTER_X;
      const yProject = (dot.y * sizeProjection) + this.PROJECTION_CENTER_Y;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(xProject, yProject, this.DOT_RADIUS * sizeProjection, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    },

    afterResize() {
      this.width = this.$refs.canvas.offsetWidth;
      this.height = this.$refs.canvas.offsetHeight;
      if (window.devicePixelRatio > 1) {
        this.$refs.canvas.width = this.$refs.canvas.clientWidth * 2;
        this.$refs.canvas.height = this.$refs.canvas.clientHeight * 2;
        ctx.scale(2, 2);
      } else {
        this.$refs.canvas.width = this.width;
        this.$refs.canvas.height = this.height;
      }
      this.GLOBE_RADIUS = this.width * 0.6;
      this.GLOBE_CENTER_Z = -this.GLOBE_RADIUS;
      this.PROJECTION_CENTER_X = this.width / 2;
      this.PROJECTION_CENTER_Y = this.height / 2;
      this.FIELD_OF_VIEW = this.width * 0.8;
      this.createDots();
    },
    onResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(this.afterResize, 500);
    }
  }
}

</script>


<style scoped>
.page {
  height: 100vh;
  width: 100vw;

  background-color: #ffc0cb;
  color: black;
  font-size: 115%;

  display: flex;
  flex-direction: column;
}

.title {
  height: 7%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #D291BC;

  font-size: 190%;
  font-weight: bold;
  font-family: "仿宋";
}

.top {
  height: 55%;
  width: 100%;

  display: flex;
  flex-direction: row;
}

.bottom {
  height: 34%;
  width: 100%;

  display: flex;
  flex-direction: row;
}

.logo {
  position: absolute;
  left: 1.5%;
  top: 0.5%;

  width: 3%;
}

.solgan {
  position: absolute;
  left: 5%;

  width: 17%;
}

.profile_add {
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: column;
}

.profile_input {
  height: 50%;
  width: 95%;

  border-radius: 15px;
  margin: 5% 0 2.5% 2.5%;
  background-color: #FFF0F5;
}

.form-title {
  height: 5%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 5%;
  padding-bottom: 2%;

  font-family: "幼圆";
  font-weight: bold;
  font-size: 90%;
}

.form-group {
  height: 10%;
  width: 100%;

  padding-top: 2%;
  font-size: 80%;

  display: flex;
}

.form_type {
  height: 100%;
  width: 25%;

  font-size: 100%;

  padding-left: 5%;

  justify-content: center;
  align-items: center;
}

.form_enter {
  height: 100%;
  width: 70%;
}

.form-button {
  height: 10%;
  width: 100%;

  font-size: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
}

.form_title_button {
  height: 100%;
  width: 30%;

  font-size: 90%;
}

.form_add_button {
  height: 100%;
  width: 30%;

  border-radius: 5px;
  cursor: pointer;

  border: solid #1E90FF 2px;
  background-color: #1E90FF;
  color: #fff;
}

#form_add_button:hover {
  background-color: #0000CD;
}

.profile_match {
  height: 40%;
  width: 95%;

  border-radius: 15px;
  margin: 0% 5% 2.5% 2.5%;
  background-color: #FFF0F5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.match_term {
  height: 15%;
  width: 90%;

  padding-top: 1%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.match_name {
  height: 100%;
  width: 40%;

  text-align: left;

  color: black;
  font-weight: bold;
}

.match_value {
  height: 100%;
  width: 60%;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #191970;
  font-weight: bold;
}

#match_button_term {
  padding-top: 10%;
}


.company_profile {
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: row;

  overflow: auto;
}

.candiate_profile {
  height: 90%;
  width: 25%;

  margin-top: 1%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile_title {
  height: 10%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 120%;
  font-weight: bold;
  font-family: "仿宋";
}

.profile_info {
  height: 90%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile_list {
  height: 25%;
  width: 95%;

  position: relative;
  padding: 1%;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  border: solid #FFAEB9 2px;
  border-radius: 15px;

  background-color: #FFF0F5;
  font-size: 80%;
}

.profile_image {
  height: 60%;
  width: 20%;

  display: block;
  padding: 0.5%;

  position: absolute;
  top: 10%;
  right: 5%;

  border: 2px solid #FFAEB9;
  border-radius: 100%;
}

.profile_name {
  height: 20%;
  width: 80%;

  margin-top: 2%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  color: #FF8247;
  animation: glow 2s ease-in-out infinite;
}

.profile_item {
  height: 20%;
  width: 80%;

  margin-top: 1%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.profile_type {
  height: 100%;
  width: 30%;

  margin-left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #FFF0F5;
  border-radius: 15%;
  border: 1px solid #E066FF;

  font-weight: bold;
  color: #FF83FA;
}

.profile_value {
  height: 100%;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px #FFB6C1, 0 0 10px #FFB6C1, 0 0 15px #FFB6C1, 0 0 20px #FFB6C1;
  }
  20% {
    text-shadow: 0 0 15px #FFB6C1, 0 0 20px #FFB6C1, 0 0 30px #FFB6C1, 0 0 35px #FFB6C1;
  }
  50% {
    text-shadow: 0 0 30px #FFB6C1, 0 0 35px #FFB6C1, 0 0 40px #FFB6C1, 0 0 45px #FFB6C1;
  }
  80% {
    text-shadow: 0 0 15px #FFB6C1, 0 0 20px #FFB6C1, 0 0 30px #FFB6C1, 0 0 35px #FFB6C1;
  }
  100% {
    text-shadow: 0 0 5px #FFB6C1, 0 0 10px #FFB6C1, 0 0 15px #FFB6C1, 0 0 20px #FFB6C1;
  }
  80% {
    text-shadow: 0 0 15px #FFB6C1, 0 0 20px #FFB6C1, 0 0 30px #FFB6C1, 0 0 35px #FFB6C1;
  }
  50% {
    text-shadow: 0 0 30px #FFB6C1, 0 0 35px #FFB6C1, 0 0 40px #FFB6C1, 0 0 45px #FFB6C1;
  }
  20% {
    text-shadow: 0 0 15px #FFB6C1, 0 0 20px #FFB6C1, 0 0 30px #FFB6C1, 0 0 35px #FFB6C1;
  }
}


.planet {
  height: 100%;
  width: 30%;
  margin-left: 2%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  border: solid black 2px;
  border-radius: 15px;
}

.planet_title {
  height: 100%;
  width: 10%;

  margin-left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, #006064, #03A9F4, #00BCD4, #E0F7FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 200%;
  writing-mode: vertical-lr;
}

.planet_motion {
  height: 100%;
  width: 85%;
}


.chart {
  height: 100%;
  width: 65%;

  display: flex;
  flex-direction: row;
}

.chart_area {
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: solid black 2px;
  border-radius: 15px;
}

.chart_title {
  height: 8%;
  width: 100%;

  margin-top: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.count_chart {
  height: 100%;
  width: 100%;
}

.rate_chart {
  height: 100%;
  width: 100%;
}
</style>