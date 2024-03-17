<template>
  <div class="page">
    <div class="top">
      <div class="profile_add">
        <div class="profile_input">
          <form @submit.prevent="addProfile">
            <div class="form-title">添加您的匹配条件</div>

            <div class="form-group">
              <label for="name">姓名：</label>
              <input type="text" id="name" v-model="newProfile.name" required>
            </div>

            <div class="form-group">
              <label for="age">年龄：</label>
              <input type="number" id="age" v-model="newProfile.age" required>
            </div>

            <div class="form-group">
              <label for="gender">性别：</label>
              <select id="gender" v-model="newProfile.gender" required>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>

            <div class="form-group">
              <label for="hobbies">爱好：</label>
              <input type="text" id="hobbies" v-model="newProfile.hobbiesStr" required>
              <p id="note"><small>（多个爱好请用逗号分隔）</small></p>
            </div>

            <button type="submit">添加</button>
          </form>
        </div>

        <div class="profile_match">
          <p><span class="label1"><strong>匹配结果</strong></span> <span class="value">{{ matcher.rate }}</span></p>
          <p><span class="label"><strong>来源公司</strong></span> <span class="value">{{ matcher.source_company }}</span></p>
          <p><span class="label"><strong>姓名</strong></span> <span class="value">{{ matcher.name }}</span></p>
          <p><span class="label"><strong>年龄</strong></span> <span class="value">{{ matcher.age }}</span></p>
          <div></div>
          <input type="button" value="点击了解更多" @click="searchProfile">
        </div>

      </div>

      <div class="company_profile">
        <div class="candiate_profile" id="company_1">
          <div v-for="profile in profiles_1" :key="profile.id" class="profile">
            <h2>{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p><span class="label"><strong>年龄:</strong></span> <span class="value">{{ profile.age }}</span></p>
            <p><span class="label"><strong>性别:</strong></span> <span class="value">{{ profile.gender }}</span></p>
            <p><span class="label"><strong>爱好:</strong></span> <span class="value">{{ profile.hobbies.join(', ') }}</span></p>
          </div>
        </div>
      </div>
      <div class="company_display">
        <div class="candiate_profile" id="company_2">
          <div v-for="profile in profiles_2" :key="profile.id" class="profile">
            <h2>{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p class="profile_1"><span class="label"><strong>年龄:</strong></span> <span class="value">{{ profile.age }}</span></p>
            <p><span class="label"><strong>性别:</strong></span> <span class="value">{{ profile.gender }}</span></p>
            <p><span class="label"><strong>爱好:</strong></span> <span class="value">{{ profile.hobbies.join(', ') }}</span></p>
          </div>
        </div>

        <div class="candiate_profile" id="company_3">
          <div v-for="profile in profiles_3" :key="profile.id" class="profile">
            <h2>{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p class="profile_1"><span class="label"><strong>年龄:</strong></span> <span class="value">{{ profile.age }}</span></p>
            <p><span class="label"><strong>性别:</strong></span> <span class="value">{{ profile.gender }}</span></p>
            <p><span class="label"><strong>爱好:</strong></span> <span class="value">{{ profile.hobbies.join(', ') }}</span></p>
          </div>
        </div>

        <div class="candiate_profile" id="company_4">
          <div v-for="profile in profiles_4" :key="profile.id" class="profile">
            <h2>{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p class="profile_1"><span class="label"><strong>年龄:</strong></span> <span class="value">{{ profile.age }}</span></p>
            <p><span class="label"><strong>性别:</strong></span> <span class="value">{{ profile.gender }}</span></p>
            <p><span class="label"><strong>爱好:</strong></span> <span class="value">{{ profile.hobbies.join(', ') }}</span></p>
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

      <div class="match_rate">
        <div class="count_chart" ref="chart_count">

        </div>

        <div class="rate_chart" id="rate_chart">

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
          name: '小明',
          age: 28,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313808.jpg'
        },
        {
          id: 2,
          name: '小红',
          age: 25,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313810.png'
        },
        {
          id: 3,
          name: '小刚',
          age: 30,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313811.jpg'
        },
        {
          id: 4,
          name: '小美',
          age: 27,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313812.jpg'
        }
      ],

      profiles_2: [
        {
          id: 1,
          name: '小明',
          age: 28,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313808.jpg'
        },
        {
          id: 2,
          name: '小红',
          age: 25,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313810.png'
        },
        {
          id: 3,
          name: '小刚',
          age: 30,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313811.jpg'
        },
        {
          id: 4,
          name: '小美',
          age: 27,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313812.jpg'
        }
      ],

      profiles_3: [
        {
          id: 1,
          name: '小明',
          age: 28,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313808.jpg'
        },
        {
          id: 2,
          name: '小红',
          age: 25,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313810.png'
        },
        {
          id: 3,
          name: '小刚',
          age: 30,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313811.jpg'
        },
        {
          id: 4,
          name: '小美',
          age: 27,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313812.jpg'
        }
      ],

      profiles_4: [
        {
          id: 1,
          name: '小明',
          age: 28,
          gender: '男',
          hobbies: ['游泳', '登山'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313808.jpg'
        },
        {
          id: 2,
          name: '小红',
          age: 25,
          gender: '女',
          hobbies: ['阅读', '电影'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313810.png'
        },
        {
          id: 3,
          name: '小刚',
          age: 30,
          gender: '男',
          hobbies: ['音乐', '旅行'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313811.jpg'
        },
        {
          id: 4,
          name: '小美',
          age: 27,
          gender: '女',
          hobbies: ['摄影', '跳舞'],
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202402252313812.jpg'
        }
      ],

      newProfile: {
        name: '',
        age: null,
        gender: '',
        hobbiesStr: ''
      },

      matcher: {
        rate: '0%',
        source_company: 'not match yet',
        name: 'not match yet',
        age: '我刚满18岁'
      },

      company_list: ['北航', '南航', '西航', '东航'],
      name_list: ['a', 'b', 'c', 'd', 'e'],
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
        title: {
          text: '访问年龄占比',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#000'
          }
        },
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
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '18-20' },
              { value: 310, name: '20-30' },
              { value: 274, name: '30-40' },
              { value: 235, name: '40-50' },
              { value: 400, name: '50+' }
            ].sort(function(a, b) {
              return a.value - b.value
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
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 1)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
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
      // 生成新的 ID
      const id = this.profiles_1.length + this.profiles_2.length + this.profiles_3.length + this.profiles_4.length + 1
      // 分割爱好字符串并去除空格
      const hobbies = this.newProfile.hobbiesStr.split(',').map(hobby => hobby.trim())
      // 添加到列表中
      if (this.newProfile.name == "张栗瑞") {
          this.profiles_1.push({
          id,
          name: this.newProfile.name,
          age: this.newProfile.age,
          gender: this.newProfile.gender,
          hobbies,
          image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403021612148.png'
        })
      }
      else if (this.newProfile.name == "卞卓航") {
        this.profiles_1.push({
          id,
          name: this.newProfile.name,
          age: this.newProfile.age,
          gender: this.newProfile.gender,
          hobbies,
          image: 'https://ooo.0x0.ooo/2024/03/17/OgUCGi.png'
        })
      } 
      else if (this.newProfile.name == "廖鹏飞") {
        this.profiles_1.push({
          id,
          name: this.newProfile.name,
          age: this.newProfile.age,
          gender: this.newProfile.gender,
          hobbies,
          image: 'https://ooo.0x0.ooo/2024/03/17/OgUwIX.png'
        })
      } 
      else if (this.newProfile.name == "梁锦程") {
        this.profiles_1.push({
          id,
          name: this.newProfile.name,
          age: this.newProfile.age,
          gender: this.newProfile.gender,
          hobbies,
          image: 'https://ooo.0x0.ooo/2024/03/17/OgWTsY.jpg'
        })
      }
      else if (this.newProfile.name == "林舒雅") {
        this.profiles_1.push({
          id,
          name: this.newProfile.name,
          age: this.newProfile.age,
          gender: this.newProfile.gender,
          hobbies,
          image: 'https://ooo.0x0.ooo/2024/03/17/OgWBgU.png'
        })
      }
      else if (this.newProfile.name == "童欣") {
        this.profiles_1.push({
          id,
          name: this.newProfile.name,
          age: this.newProfile.age,
          gender: this.newProfile.gender,
          hobbies,
          image: 'https://ooo.0x0.ooo/2024/03/17/OgW5Wp.png'
        })
      }
      

      // 清空表单
      this.newProfile.name = ''
      this.newProfile.age = null
      this.newProfile.gender = ''
      this.newProfile.hobbiesStr = ''
    },

    searchProfile() {
      this.matcher.rate = (Math.random() * (95 - 60) + 60).toFixed(2) + '%'
      this.matcher.source_company = this.company_list[Math.floor(Math.random() * this.company_list.length)]

      this.matcher.name = this.name_list[Math.floor(Math.random() * this.name_list.length)]
      this.matcher.age = '我刚满' + (++this.age_init) + '岁'
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

      this.GLOBE_RADIUS = this.height * 0.5
      this.GLOBE_CENTER_Z = -this.GLOBE_RADIUS
      this.PROJECTION_CENTER_X = this.width / 2
      this.PROJECTION_CENTER_Y = this.height / 2
      this.FIELD_OF_VIEW = this.width * 0.8
    },

    createDots() {
      this.dots = []
      this.dotColors = []
      for (let i = 0; i < this.DOTS_AMOUNT; i++) {
        const theta = Math.random() * 2 * Math.PI
        const phi = Math.acos((Math.random() * 2) - 1)
        const x = this.GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta)
        const y = this.GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta)
        const z = (this.GLOBE_RADIUS * Math.cos(phi)) + this.GLOBE_CENTER_Z
        const color = this.generateRandomColor() // 生成随机颜色
        this.dots.push({ x, y, z })
        this.dotColors.push(color) // 将随机颜色存入数组
      }
    },

    renderScene() {
      const ctx = this.$refs.canvas.getContext('2d')
      ctx.clearRect(0, 0, this.width, this.height)
      this.rotation += 0.002
      const sineRotation = Math.sin(this.rotation)
      const cosineRotation = Math.cos(this.rotation)
      for (let i = 0; i < this.dots.length; i++) {
        const color = this.dotColors[i] // 获取随机颜色
        this.drawDot(ctx, this.dots[i], sineRotation, cosineRotation, color)
      }
      window.requestAnimationFrame(this.renderScene)
    },

    generateRandomColor() {
      const r = Math.floor(Math.random() * 256) // 随机生成红色分量
      const g = Math.floor(Math.random() * 256) // 随机生成绿色分量
      const b = Math.floor(Math.random() * 256) // 随机生成蓝色分量
      return `rgb(${r},${g},${b})` // 返回随机颜色
    },

    drawDot(ctx, dot, sin, cos, color) {
      const rotX = cos * dot.x + sin * (dot.z - this.GLOBE_CENTER_Z)
      const rotZ = -sin * dot.x + cos * (dot.z - this.GLOBE_CENTER_Z) + this.GLOBE_CENTER_Z
      const sizeProjection = this.FIELD_OF_VIEW / (this.FIELD_OF_VIEW - rotZ)
      const xProject = (rotX * sizeProjection) + this.PROJECTION_CENTER_X
      const yProject = (dot.y * sizeProjection) + this.PROJECTION_CENTER_Y
      ctx.fillStyle = color // 设置点的颜色
      ctx.beginPath()
      ctx.arc(xProject, yProject, this.DOT_RADIUS * sizeProjection, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    },

    afterResize() {
      this.width = this.$refs.canvas.offsetWidth
      this.height = this.$refs.canvas.offsetHeight
      if (window.devicePixelRatio > 1) {
        this.$refs.canvas.width = this.$refs.canvas.clientWidth * 2
        this.$refs.canvas.height = this.$refs.canvas.clientHeight * 2
        ctx.scale(2, 2)
      } else {
        this.$refs.canvas.width = this.width
        this.$refs.canvas.height = this.height
      }
      this.GLOBE_RADIUS = this.width * 0.7
      this.GLOBE_CENTER_Z = -this.GLOBE_RADIUS
      this.PROJECTION_CENTER_X = this.width / 2
      this.PROJECTION_CENTER_Y = this.height / 2
      this.FIELD_OF_VIEW = this.width * 0.8
      this.createDots()
    },
    onResize() {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = setTimeout(this.afterResize, 500)
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

.top {
  height: 60%;
  width: 100%;

  display: flex;
  flex-direction: row;
}

.bottom {
  height: 38%;
  width: 100%;
  
  display: flex;
  flex-direction: row;
}

.profile_add {
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: column;
}

.profile_input {
  height: 43%;
  width: 93%;
    
  border: solid #FFAEB9 2px;
  border-radius: 15px;
  padding: 1%;
  margin: 22% 0 1% 4%;
  background-color: #FFF0F5;
  box-shadow: 0 0 10% rgba(255, 174, 185, 0.5);
}

.form-title {
  padding-top: 6%;
  padding-bottom: 2%;
  margin-left: 9%;   
  font-weight: bold;
  font-size: 115%; 
}

.form-group {
  width: 100%;
}

.form-group label {
  padding-top: 1%;
  padding-bottom: 1%;
  margin-left: 9%;   
  font-weight: bold;
  font-size: 93%;  
}

#note {
  padding-top: 1%;
  padding-bottom: 1%;
  margin-left: 23%;  
  font-size: 95%; 
}

form button {
  padding: 1.5% 4%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 40%; 
}

form button:hover {
  background-color: #0056b3;
}

#name {
  width: 30%;
}
#age {
  width: 20%;
}
#gender {
  width: 20%;
}

form input,
form select {
  padding: 1.5%;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.profile_match {
  height: 31%;
  width: 80%;
  border: solid #FFAEB9 2px;
  border-radius: 15px;
  margin: 4% 0 1% 9%;
  background-color: #FFF0F5;
  box-shadow: 0 0 10px rgba(255, 174, 185, 0.5);
}

.profile_match .label1{
  display: inline-block; /* 使其可以像块级元素一样设置宽度和高度，但保留内联元素的特性 */  
  padding: 2%; /* 设置内边距，确保文字不会紧贴着边框 */  
  background-color: black; /* 设置背景颜色为黑色 */  
  color: white; /* 设置文字颜色为白色，以便在黑色背景上可见 */  
  border-radius: 10% / 10%; /* 创建一个椭圆形的边框，水平半径和垂直半径不同 */  
  line-height: 1.3; /*调整行高以更好地适应椭圆形状   */
  text-align: center; /* 文字水平居中 */  
  font-size:70%; /* 设置字体大小 */
  margin-left: 15%; 
  margin-top: 5%;
  font-weight: bold;
}

.profile_match .label{
  display: inline-block; /* 使其可以像块级元素一样设置宽度和高度，但保留内联元素的特性 */  
  padding: 2%; /* 设置内边距，确保文字不会紧贴着边框 */  
  background-color: black; /* 设置背景颜色为黑色 */  
  color: white; /* 设置文字颜色为白色，以便在黑色背景上可见 */  
  border-radius: 10% / 10%; /* 创建一个椭圆形的边框，水平半径和垂直半径不同 */  
  line-height: 1.3; /*调整行高以更好地适应椭圆形状   */
  text-align: center; /* 文字水平居中 */  
  font-size:70%; /* 设置字体大小 */
  margin-left: 15%; 
  font-weight: bold;
}

.profile_match .value{
  margin-left: 3%;   
  font-size: 80%;  
}

.profile_match input{
  margin-left: 30%; 
  margin-top: 5%;
}

.company_profile {
  height: 100%;
  width: 20%;

  display: flex;
  flex-direction: row;

  overflow: auto;
}

.company_display {
  height: 100%;
  width: 60%;
  margin-top: 3%;
  display: flex;
  flex-direction: row;

  overflow: auto;
}

.company_profile .candiate_profile {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.company_display .candiate_profile {
  height: 100%;
  width: 33%;
  overflow: auto;
}

.planet {
  height: 100%;
  width: 30%;
  margin-left: 2%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  border: solid black 3px;
}

.planet_title {
  height: 100%;
  width: 15%;

  font-size: 200%;
  font-size: 48px;  
  font-family:Georgia, 'Times New Roman', Times, serif;
  background: linear-gradient(to bottom, #fc2797, #f427fc, #7c27fc, #27fcc6, #27fc34, #c8fc27,#fcf327);  
  -webkit-background-clip: text;  
  -webkit-text-fill-color: transparent;  

  writing-mode: vertical-lr;
  margin-top: 17%;
  margin-left: 3%;
  justify-content: space-between;
}

.planet_motion {
  height: 100%;
  width: 85%;
}

.match_rate {
  height: 100%;
  width: 65%;

  display: flex;
  flex-direction: row;

  border: solid black 3px;
}

.count_chart {
  height: 100%;
  width: 50%;

  border: solid purple 2px;
}

.rate_chart {
  height: 100%;
  width: 50%;

  border: solid purple 2px;
}


.profile {
  height: 20%;
  width: 98%;

  position: relative;
  border: solid #FFAEB9 2px;
  border-radius: 15px;
  padding: 1%;
  margin: 1% 0 1% 0;
  background-color: #FFF0F5;
  box-shadow: 0 0 10px rgba(255, 174, 185, 0.5);

  font-size: 80%;
}

.profile img {
  width: 30%;  
  height: 85%;

  border-radius: 100%; 
  margin: 0 auto; 
  display: block; 
  border: 2px solid #FFAEB9; 
  padding: 1%; 

  position: absolute;
  top: 7%;
  right: 5%;
}

@keyframes glow {  
    0% { text-shadow: 0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 15px #FF69B4, 0 0 20px #FF69B4; }  
    20% { text-shadow: 0 0 15px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4, 0 0 35px #FF69B4; } 
    50% { text-shadow: 0 0 30px #FF69B4, 0 0 35px #FF69B4, 0 0 40px #FF69B4, 0 0 45px #FF69B4; }
    80% { text-shadow: 0 0 15px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4, 0 0 35px #FF69B4; } 
    100% { text-shadow: 0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 15px #FF69B4, 0 0 20px #FF69B4; }
    80% { text-shadow: 0 0 15px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4, 0 0 35px #FF69B4; }
    50% { text-shadow: 0 0 30px #FF69B4, 0 0 35px #FF69B4, 0 0 40px #FF69B4, 0 0 45px #FF69B4; } 
    20% { text-shadow: 0 0 15px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #FF69B4, 0 0 35px #FF69B4; } 
}  

.profile h2 {  
  padding-top: 1.5%;
  padding-bottom: 1%;
  margin-left: 10%;   
  font-weight: bold;
  font-size: 98%;  
  color: #FF3030;  
  animation: glow 2s ease-in-out infinite; 
}

.profile .label {
  padding-top: 1%;
  margin-left: 10%;   
  font-size: 80%;   
  color: #FF83FA;   
  border-radius: 15%;  
  border: 1px solid #E066FF;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3); 
  background-color: #FFF0F5;  
  line-height: 2.3;  
  padding: 0.8%; 
}

.profile .value {
  font-weight: bold;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left: 2%;   
  font-size: 85%;   
}
</style>