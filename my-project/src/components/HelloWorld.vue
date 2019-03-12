<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul >
      <li>
        <router-link to="Layout">基本布局 </router-link> 
      </li>
      <li>
        <router-link to="Container">容器、常见布局 </router-link> 
      </li>
      <li>
        <router-link to="Color">颜色，常见颜色的类名 </router-link> 
      </li>
      <li>
        <router-link to="Button">按钮和icon </router-link> 
      </li>
      
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      
    </ul>
    <div class="block">
      <span class="demonstration">默认显示颜色</span>
      <span class="wrapper">
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
