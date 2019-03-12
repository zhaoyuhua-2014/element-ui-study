import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from "@/components/LayoutBasic";
import Container from "@/components/Container";
import Color from "@/components/Color";
import Button from "@/components/Button";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    },
    {
      path: '/Color',
      name: 'Color',
      component: Color
    }, 
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    
  ]
})
