// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 全局配置
//在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z - index（默认值：2000）。按照引入 Element 的方式，具体操作如下：

//完整引入 Element：

//import Vue from 'vue';
//import Element from 'element-ui';
//Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
})

//new Vue({
//  el: '#app',
//  render: h => h(App)
//});
// eslint-disable no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
