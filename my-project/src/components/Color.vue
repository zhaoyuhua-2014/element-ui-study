<template>
   <div class="">
      <el-container>
         <el-header>
            <h1>Color</h1>
         </el-header>
         <el-main>
            <el-row>
               <el-col :span='8'>
                  <el-container>
                     <el-header>
                        Main Color（主色）
                     </el-header>
                     <el-main>
                        The main color of Element is bright and friendly blue.
                        Element-UI 的主色是明亮友好的蓝色
                        Brand Color
                        #409EFF
                     </el-main>
                  </el-container>
               </el-col>
               <el-col :span='8'>
                  <el-container>
                     <el-header>
                        Secondary Color（二等色）
                     </el-header>
                     <el-main>
                        Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)
                        除了主色外，还需要在不同的场景中使用不同的场景颜色（例如，危险颜色表示危险操作）
                        <el-row>
                           <el-col :span='6'>
                              Success（成功）
                              #67C23A
                           </el-col>
                           <el-col :span='6'>
                              Warning（警告）
                              #E6A23C
                           </el-col>
                           <el-col :span='6'>
                              Danger（危险）
                              #F56C6C
                           </el-col>
                           <el-col :span='6'>
                              Info（提示）
                              #909399
                           </el-col>
                        </el-row>
                     </el-main>
                  </el-container>
               </el-col>
               <el-col :span='8'>
                  <el-container>
                     <el-header>
                       <h3> Neutral Color</h3>
                       <p>Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.</p>
                       <p>中性色是为文本,背景和边框的颜色。您可以使用不同的中性颜色来表示层次结构。</p>
                     </el-header>
                     <el-main>
                        <el-row>
                           <el-col :span='8'>
                              Primary Text#303133
                           </el-col>
                           <el-col :span='8'>
                              Base Border#DCDFE6
                           </el-col>
                           <el-col :span='8'>
                              Basic Black#000000
                           </el-col>
                        </el-row>
                        <el-row>
                           <el-col :span='8'>
                              Regular Text#606266
                           </el-col>
                           <el-col :span='8'>
                              Light Border#E4E7ED
                           </el-col>
                           <el-col :span='8'>
                              Basic White#FFFFFF
                           </el-col>
                        </el-row>
                        <el-row>
                           <el-col :span='8'>
                              Secondary Text#909399
                           </el-col>
                           <el-col :span='8'>
                              Lighter Border#EBEEF5
                           </el-col>
                           <el-col :span='8'>
                              Transparent Transparent
                           </el-col>
                        </el-row>
                        <el-row>
                           <el-col :span='8'>
                              Placeholder Text#C0C4CC
                           </el-col>
                           <el-col :span='8'>
                              Extra  Border#F2F6FC
                           </el-col>
                        </el-row>
                     </el-main>
                  </el-container>
               </el-col>
            </el-row>
         </el-main>
      </el-container>
   </div>
</template>

<script>
export default {
   name: 'Color',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped>

el-row{
   height: 60px;
}
el-header,el-main,el-container,el-footer{
   height: auto !important;
}
</style>
