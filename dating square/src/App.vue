import * as echarts from 'echarts';

<template>
  <div class="container">
    <div class="content">
      <h1>相亲网站示例</h1>

      <!-- 添加表单 -->
      <form @submit.prevent="addProfile">
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
          <!-- <small>（多个爱好用逗号分隔）</small> -->
        </div>

        <button type="submit">添加</button>
      </form>

      <!-- 显示现有的个人资料 -->
      <div v-for="profile in profiles" :key="profile.id" class="profile">
        <h2>{{ profile.name }}</h2>
        <img :src="profile.image" alt="Profile Image">
        <p><strong>年龄:</strong> {{ profile.age }}</p>
        <p><strong>性别:</strong> {{ profile.gender }}</p>
        <p><strong>爱好:</strong> {{ profile.hobbies.join(', ') }}</p>
      </div>
    </div>


    <div class="map-container">
      12345
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: [
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
      }
    }
  },
  methods: {
    addProfile() {
      // 生成新的 ID
      const id = this.profiles.length + 1
      // 分割爱好字符串并去除空格
      const hobbies = this.newProfile.hobbiesStr.split(',').map(hobby => hobby.trim())
      // 添加到列表中
      this.profiles.push({
        id,
        name: this.newProfile.name,
        age: this.newProfile.age,
        gender: this.newProfile.gender,
        hobbies,
        image: 'https://via.placeholder.com/150'
      })
      // 清空表单
      this.newProfile.name = ''
      this.newProfile.age = null
      this.newProfile.gender = ''
      this.newProfile.hobbiesStr = ''
    }
  }
}

</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;

  margin: 0;
  padding: 0;

  background-color: #ffc0cb;
  color: black;

  font-size: 20px;
  display: flex;
}

.content {
  height: 100%;
  width: 50%;

  flex: 1;
}

.profile {
  width: 100%;

  position: relative;
  border: solid #ccc 2px;
  border-radius: 20px;
  padding: 1%;
  margin-bottom: 1%;
  background-color: rgba(255, 255, 255, 0.7);
}

.profile h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.profile img {
  width: 50px;
  height: 50px;

  position: absolute;
  top: 5px;
  right: 5px;

  border-radius: 50%;
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

  border: solid red 2px;
}

.form-group label {
  width: 20%;

  border: solid green 2px;
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

.map-container {
  width: 50%;
  height: 100%;

  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>