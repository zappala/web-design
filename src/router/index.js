import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
import WhiteSpace from '../views/WhiteSpace.vue'
import VisualHierarchy from '../views/VisualHierarchy.vue'
import Typography from '../views/Typography.vue'
import Navigation from '../views/Navigation.vue'
import Color from '../views/Color.vue'
import Alignment from '../views/Alignment.vue'
import ResponsiveDesign from '../views/ResponsiveDesign.vue'
import Atlantic from '../views/Atlantic.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/whitespace',
    name: 'whitespace',
    component: WhiteSpace
  },
  {
    path: '/visualhierarchy',
    name: 'visualhierarchy',
    component: VisualHierarchy
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: Navigation
  },
  {
    path: '/color',
    name: 'color',
    component: Color
  },
  {
    path: '/alignment',
    name: 'alignment',
    component: Alignment
  },
  {
    path: '/responsivedesign',
    name: 'responsivedesign',
    component: ResponsiveDesign
  },
  {
    path: '/atlantic',
    name: 'atlantic',
    component: Atlantic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
