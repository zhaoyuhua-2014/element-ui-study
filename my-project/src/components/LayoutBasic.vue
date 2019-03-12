<template>
   <div class="layout">
       <div class="demo-block">
           <h2>Basic Layout(基本布局)</h2>
           <div class="block">
               <el-row>
                   <el-col :span='24'>
                       <div class="grid-content bg-purple-dark"></div>
                   </el-col>
               </el-row>
               <el-row>
                   <el-col :span='12'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='12'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
               </el-row>
               <el-row>
                   <el-col :span='8'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='8'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='8'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
           </div>
       </div>
       <div class="demo-block">
           <h2>Column spacing(列间距)</h2>
           <div class="block">
               <el-row :gutter="20">
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
               </el-row>
           </div>
       </div>
       <div class="demo-block">
           <h2>Hybrid layout(混合布局)</h2>
           <div class="block">
               <el-row :gutter="20">
                    <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
           </div>
       </div>
       <div class="demo-block">
           <h2>Column offset(列间距偏移)</h2>
           <div class="block">
               <el-row :gutter="20">
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6' :offset="6">
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
               </el-row>
               <el-row :gutter="20">
                   <el-col :span='6' :offset="6">
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6' :offset="6">
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
               </el-row>
               <el-row>
                   <el-col :span='12' :offset="6">
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
           </div>
           <h2>push（向右平移）</h2>
           <div class="block">
               <el-row >
                   <el-col :span='6' :push='1' >
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
           </div>
       </div>
       <div class="demo-block">
           <h2>Alignment(对准，校准，对齐)</h2>
           <div class="block">
               <el-row type='flex'>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
               <el-row type='flex' justify='center'>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
               <el-row type='flex' justify='start'>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
               <el-row type='flex' justify='end'>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
               <el-row type='flex' justify='space-between'>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
               <el-row type='flex' justify='space-arount'>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple-light"></div>
                   </el-col>
                   <el-col :span='6'>
                       <div class="grid-content bg-purple"></div>
                   </el-col>
               </el-row>
               
           </div>
       </div>
       <div class="demo-block">
           <h2>Utility classes for hiding elements(用于隐藏元素的实用程序类)</h2>
           <div class="block">
              <code>
                    Additionally, Element provides a series of classes for hiding elements under certain conditions. These classes can be added to any DOM elements or custom components. You need to import the following CSS file to use these classes:
                    此外，Element提供了一系列用于在特定条件下隐藏元素的类。这些类可以添加到任何DOM元素或自定义组件中。您需要导入以下CSS文件才能使用这些类：

                    import 'element-ui/lib/theme-chalk/display.css';
                    The classes are:

                    hidden-xs-only - hide when on extra small viewports only
                    仅在超小视口时隐藏
                    hidden-sm-only - hide when on small viewports and down
                    在小视口和下方隐藏
                    hidden-sm-and-down - hide when on small viewports and down
                    在小视口和下方隐藏
                    hidden-sm-and-up - hide when on small viewports and up
                    在小视口时隐藏起来
                    hidden-md-only - hide when on medium viewports only
                    仅在中等视口时隐藏
                    hidden-md-and-down - hide when on medium viewports and down
                    在中等视口和向下时隐藏
                    hidden-md-and-up - hide when on medium viewports and up
                    在中等视口上时隐藏
                    hidden-lg-only - hide when on large viewports only
                    仅在大型视口时隐藏
                    hidden-lg-and-down - hide when on large viewports and down
                    在大型视口和下方时隐藏
                    hidden-lg-and-up - hide when on large viewports and up
                    在大型视口上时隐藏
                    hidden-xl-only - hide when on extra large viewports only
                    仅在超大视口时隐藏
              </code>
           </div>
       </div>
       <div class="demo-block">
           <h2>Row Attributes(行属性)</h2>
           <div class="block">
               <table>
                   <thead>
                        <td>Attribute</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Accepted Values</td>
                        <td>Default</td>
                   </thead>
                   <tbody>
                        <tr>
                            <td>gutter</td>
                            <td>grid spacing</td>
                            <td>number</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>layout mode, you can use flex, works in modern browsers</td>
                            <td>string</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>justify</td>
                            <td>horizontal alignment of flex layout</td>
                            <td>string</td>
                            <td>start/end/center/space-around/space-between</td>
                            <td>start</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>vertical alignment of flex layout</td>
                            <td>string</td>
                            <td>top/middle/bottom</td>
                            <td>top</td>
                        </tr>
                        <tr>
                            <td>tag</td>
                            <td>custom element tag</td>
                            <td>string</td>
                            <td>*</td>
                            <td>div</td>
                        </tr>
                   </tbody>
               </table>
           </div>
       </div>

        <div class="demo-block">
           <h2>Col Attributes(列属性)</h2>
           <div class="block">
               <table>
                   <thead>
                        <td>Attribute</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Accepted Values</td>
                        <td>Default</td>
                   </thead>
                   <tbody>
                       <tr>
                            <td>span</td>
                            <td>number of column the grid spans</td>
                            <td>number</td>
                            <td>-</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>offset</td>
                            <td>number of spacing on the left side of the grid（网格左侧的间距数）</td>
                            <td>number</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>push</td>
                            <td>number of columns that grid moves to the right（网格向右移动的列数）</td>
                            <td>number</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>pull</td>
                            <td>number of columns that grid moves to the left（网格向左移动的列数）</td>
                            <td>number</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>xs</td>
                            <td> &lt; 768px Responsive columns or column props object</td>
                            <td>number/object (e.g. {span: 4, offset: 4})</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>sm</td>
                            <td>&ge;768px Responsive columns or column props object</td>
                            <td>number/object (e.g. {span: 4, offset: 4})</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>md</td>
                            <td>&ge;992px Responsive columns or column props object</td>
                            <td>number/object (e.g. {span: 4, offset: 4})</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>lg</td>
                            <td>&ge;1200px Responsive columns or column props object</td>
                            <td>number/object (e.g. {span: 4, offset: 4})</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>xl</td>
                            <td>&ge;1920px Responsive columns or column props object</td>
                            <td>number/object (e.g. {span: 4, offset: 4})</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                         <tr>
                            <td>tag</td>
                            <td>custom element tag</td>
                            <td>string</td>
                            <td>*</td>
                            <td>div</td>
                        </tr>
                   </tbody>
               </table>
           </div>
       </div>
   </div>
   
</template>

<script>
export default {
   name: 'Layer',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped >
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
