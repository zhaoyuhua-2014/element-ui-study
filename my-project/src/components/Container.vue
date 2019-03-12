<template>
   <div class="app">
       <el-container>
           <el-header>header（el-header 表示头部区域）</el-header>
           <el-main>
               <h1>main->h1（el-main 表示主区域）</h1>
               <el-container>
                   <el-aside width='200px'>
                       aside（el-aside 表示侧边区域 侧边导航）
                   </el-aside>
                   <el-main>
                       main（el-contauiner 大的容器元素   可嵌套使用）
                   </el-main>
                   <!-- <p>1</p>
                   <p>2</p> -->
                   <!-- <el-header>
                       <p>
                           1
                       </p>
                       <p>
                           2
                       </p>
                   </el-header> -->
               </el-container>
           </el-main>
           <el-footer>
               <p>footer （el-footer 表示底部区域）</p>
               <p>ceshi</p>
               <el-container>
                   <p>0</p>
                   <p>1</p>
               </el-container>
           </el-footer>
       </el-container>
       <div class="block">
           Container 的属性 <br>
           direction:<br>
           description:  layout direction for child elements（子元素的排列顺序）<br>
           Type : String;<br>
           Accepted Values : horizontal/vertical ;<br>
           Default :  vertical when nested with el-header or el-footer; horizontal otherwise（翻译的内容不准确，结合自己的实践总价如下：当在el-header,el-footer元素中时候子元素默认水平排列，其他el容器内默认为垂直排列）
            <br>
            el-header,el-footer 属性 height 默认值为60px
            <br>
            el-aside 属性 width 默认值为 300 px;
            <br>

       </div>
   </div>
</template>

<script>
export default {
   name: 'Container',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped >

</style>
