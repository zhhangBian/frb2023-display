<template>
  <div class="page">
    <div class="top">
      <div class="profile_add">
        <div class="profile_input">
          <form @submit.prevent="addProfile">
            <div>添加您的匹配条件</div>
  
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
              <small>（多个爱好请用逗号分隔）</small>
            </div>
  
            <button type="submit">添加</button>
          </form>
        </div>

        <div class="profile_match">
          <p><strong>匹配结果：</strong>{{ matcher.rate }}</p> 
          <p><strong>来源公司：</strong>{{ matcher.source_company }}</p>
          <p><strong>姓名：</strong>{{ matcher.name }}</p>
          <p><strong>年龄：</strong>{{ matcher.age }}</p>
          <div></div>
          <input type="button" value="点击了解更多" @click="searchProfile">
        </div>
        
      </div>

      <div class="company_profile">
        <div class="candiate_profile" id="company_1">
          <div v-for="profile in profiles_1" :key="profile.id" class="profile">
            <h2 style="font-size: 10px;">{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p><strong>年龄:</strong> {{ profile.age }}</p>
            <p><strong>性别:</strong> {{ profile.gender }}</p>
            <p><strong>爱好:</strong> {{ profile.hobbies.join(', ') }}</p>
          </div>
        </div>

        <div class="candiate_profile" id="company_2">
          <div v-for="profile in profiles_2" :key="profile.id" class="profile">
            <h2 style="font-size: 10px;">{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p><strong>年龄:</strong> {{ profile.age }}</p>
            <p><strong>性别:</strong> {{ profile.gender }}</p>
            <p><strong>爱好:</strong> {{ profile.hobbies.join(', ') }}</p>
          </div>
        </div>

        <div class="candiate_profile" id="company_3">
          <div v-for="profile in profiles_3" :key="profile.id" class="profile">
            <h2 style="font-size: 10px;">{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p><strong>年龄:</strong> {{ profile.age }}</p>
            <p><strong>性别:</strong> {{ profile.gender }}</p>
            <p><strong>爱好:</strong> {{ profile.hobbies.join(', ') }}</p>
          </div>
        </div>

        <div class="candiate_profile" id="company_4">
          <div v-for="profile in profiles_4" :key="profile.id" class="profile">
            <h2 style="font-size: 10px;">{{ profile.name }}</h2>
            <img :src="profile.image" alt="Profile Image">
            <p><strong>年龄:</strong> {{ profile.age }}</p>
            <p><strong>性别:</strong> {{ profile.gender }}</p>
            <p><strong>爱好:</strong> {{ profile.hobbies.join(', ') }}</p>
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
        
      </div>
    </div>
  </div>
</template>

<script>

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
        rate: "0%",
        source_company: "not match yet",
        name: "not match yet",
        age: "我刚满18岁",
      },

      company_list: ['北航', '南航', '西航', '东航'],
      name_list: ['a','b','c','d','e'],
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
      dotColors: []
    };
  },

  mounted() {
    this.init();
    this.createDots();
    this.renderScene();
    window.addEventListener('resize', this.onResize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    addProfile() {
      // 生成新的 ID
      const id = this.profiles_1.length + this.profiles_2.length + this.profiles_3.length + this.profiles_4.length + 1;
      // 分割爱好字符串并去除空格
      const hobbies = this.newProfile.hobbiesStr.split(',').map(hobby => hobby.trim());
      // 添加到列表中
      this.profiles_1.push({
        id,
        name: this.newProfile.name,
        age: this.newProfile.age,
        gender: this.newProfile.gender,
        hobbies,
        image: 'https://pigkiller-011955-1319328397.cos.ap-beijing.myqcloud.com/img/202403021612148.png'
      });
      
      // 清空表单
      this.newProfile.name = '';
      this.newProfile.age = null;
      this.newProfile.gender = '';
      this.newProfile.hobbiesStr = '';
    },

    searchProfile() {
      this.matcher.rate = (Math.random() * (95 - 60) + 60).toFixed(2) + '%';
      this.matcher.source_company = this.company_list[Math.floor(Math.random() * this.company_list.length)];
    
      this.matcher.name = this.name_list[Math.floor(Math.random() * this.name_list.length)];
      this.matcher.age = "我刚满" + (++this.age_init) + "岁";
    },

    init() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      this.width = canvas.clientWidth;
      this.height = canvas.clientHeight;

      if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
        ctx.scale(2, 2);
      }

      this.GLOBE_RADIUS = this.height * 0.5;
      this.GLOBE_CENTER_Z = -this.GLOBE_RADIUS;
      this.PROJECTION_CENTER_X = this.width / 2;
      this.PROJECTION_CENTER_Y = this.height / 2;
      this.FIELD_OF_VIEW = this.width * 0.8;
    },

    createDots() {
      this.dots = [];
      this.dotColors = [];
      for (let i = 0; i < this.DOTS_AMOUNT; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos((Math.random() * 2) - 1);
        const x = this.GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
        const y = this.GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
        const z = (this.GLOBE_RADIUS * Math.cos(phi)) + this.GLOBE_CENTER_Z;
        const color = this.generateRandomColor(); // 生成随机颜色
        this.dots.push({ x, y, z });
        this.dotColors.push(color); // 将随机颜色存入数组
      }
    },

    renderScene() {
      const ctx = this.$refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.width, this.height);
      this.rotation += 0.002;
      const sineRotation = Math.sin(this.rotation);
      const cosineRotation = Math.cos(this.rotation);
      for (let i = 0; i < this.dots.length; i++) {
        const color = this.dotColors[i]; // 获取随机颜色
        this.drawDot(ctx, this.dots[i], sineRotation, cosineRotation, color);
      }
      window.requestAnimationFrame(this.renderScene);
    },

    generateRandomColor() {
      const r = Math.floor(Math.random() * 256); // 随机生成红色分量
      const g = Math.floor(Math.random() * 256); // 随机生成绿色分量
      const b = Math.floor(Math.random() * 256); // 随机生成蓝色分量
      return `rgb(${r},${g},${b})`; // 返回随机颜色
    },

    drawDot(ctx, dot, sin, cos, color) {
      const rotX = cos * dot.x + sin * (dot.z - this.GLOBE_CENTER_Z);
      const rotZ = -sin * dot.x + cos * (dot.z - this.GLOBE_CENTER_Z) + this.GLOBE_CENTER_Z;
      const sizeProjection = this.FIELD_OF_VIEW / (this.FIELD_OF_VIEW - rotZ);
      const xProject = (rotX * sizeProjection) + this.PROJECTION_CENTER_X;
      const yProject = (dot.y * sizeProjection) + this.PROJECTION_CENTER_Y;
      ctx.fillStyle = color; // 设置点的颜色
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
      this.GLOBE_RADIUS = this.width * 0.7;
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
};

</script>


<style scoped>
.page {
  height: 100vh;
  width: 100vw;

  background-color: #ffc0cb;
  color: black;
  font-size: 20px;

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
  height: 40%;
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
  height: 50%;
  width: 100%;
}

.profile_match {
  height: 50%;
  width: 100%;

  font-size: 15px;
}

.company_profile {
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: row;

  overflow: auto;
}

.candiate_profile {
  height: 100%;
  width: 25%;

  overflow: auto;
}

.planet {
  height: 100%;
  width: 40%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  border: solid black 3px;
}

.planet_title {
  height: 100%;
  width: 15%;

  font-size: 250%;
  writing-mode: vertical-lr;
  justify-content: space-between;
}

.planet_motion {
  height: 100%;
  width: 85%;
}

.match_rate {
  height: 100%;
  width: 60%;

  border: solid black 3px;
}

.profile {
  height: 20%;
  width: 100%;

  position: relative;
  border: solid #ccc 2px;
  border-radius: 20px;
  padding: 1%;
  margin-bottom: 1%;
  background-color: rgba(255, 255, 255, 0.7);

  font-size: 10px;
}

.profile img {
  width: 15%;
  height: 85%;

  position: absolute;
  top: 10px;
  right: 10px;

  border: 2px solid #ddd;
}

.profile p {
  margin: 4px 0;
}

.profile p strong {
  font-weight: bold;
}

.form-group {
  width: 100%;
}

.form-group label {
  width: 20%;
}

form input,
form select {
  width: 80%;

  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  padding: 4px 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}
</style>