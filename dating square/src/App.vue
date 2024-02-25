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

    <!-- 地图 -->
    <div id="map-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: [
        { id: 1, name: '小明', age: 28, gender: '男', hobbies: ['游泳', '登山'], image: 'https://via.placeholder.com/150' },
        { id: 2, name: '小红', age: 25, gender: '女', hobbies: ['阅读', '电影'], image: 'https://via.placeholder.com/150' },
        { id: 3, name: '小刚', age: 30, gender: '男', hobbies: ['音乐', '旅行'], image: 'https://via.placeholder.com/150' },
        { id: 4, name: '小美', age: 27, gender: '女', hobbies: ['摄影', '跳舞'], image: 'https://via.placeholder.com/150' }
      ],
      newProfile: {
        name: '',
        age: null,
        gender: '',
        hobbiesStr: ''
      }
    };
  },
  methods: {
    addProfile() {
      // 生成新的 ID
      const id = this.profiles.length + 1;
      // 分割爱好字符串并去除空格
      const hobbies = this.newProfile.hobbiesStr.split(',').map(hobby => hobby.trim());
      // 添加到列表中
      this.profiles.push({
        id,
        name: this.newProfile.name,
        age: this.newProfile.age,
        gender: this.newProfile.gender,
        hobbies,
        image: 'https://via.placeholder.com/150'
      });
      // 清空表单
      this.newProfile.name = '';
      this.newProfile.age = null;
      this.newProfile.gender = '';
      this.newProfile.hobbiesStr = '';
    }
  }
};

</script>

<style scoped>
.container {
  width: 90vw; /* 将网站宽度设置为视口宽度 */
  margin: 0 auto;
  padding: 20px;
  background-color: #ffc0cb; /* 粉色背景 */
  color: #000; /* 黑色字体 */
  display: flex;
}

.content {
  flex: 1;
}

.profile {
  position: relative; /* 相对定位 */
  border: 2px solid #ccc;
  border-radius: 20px;
  padding: 1%; /* 调整为原先的一半 */
  margin-bottom: 1%; /* 调整为原先的一半 */
  background-color: rgba(255, 255, 255, 0.7); /* 透明背景 */
  width: 48%; /* 调整为原先的一半 */
  max-width: calc(50% - 20px); /* 考虑到边距的调整 */
}

.profile h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.profile img {
  position: absolute; /* 绝对定位 */
  top: 5px; /* 距离卡片顶部 5px */
  right: 5px; /* 距离卡片右侧 5px */
  width: 50px; /* 调整为原先的一半 */
  height: 50px; /* 调整为原先的一半 */
  border-radius: 50%;
  border: 2px solid #ddd;
}

.profile p {
  margin: 4px 0; /* 调整为原先的一半 */
}

.profile p strong {
  font-weight: bold;
}

.form-group {
  margin-bottom: 5px; /* 调整为原先的一半 */
}

form input,
form select {
  width: 45%;
  padding: 4px; /* 调整为原先的一半 */
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  padding: 4px 8px; /* 调整为原先的一半 */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

#map-container {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0; /* 地图容器背景色 */
}
</style>