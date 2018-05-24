import Vue from 'vue'
import Router from 'vue-router'

import Material from './views/Material.vue'
import Programs from './views/Programs.vue'
import Segments from './views/Segments.vue'
import Support from './views/Support.vue'
import Grid from './views/Grid.vue'
import Views from './views/Views.vue'
import NewMaterial from './views/NewMaterial.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'material',
      component: Material
    },
    {
      path: '/programs',
      name: 'programs',
      component: Programs
    },
    {
      path: '/segments',
      name: 'segments',
      component: Segments
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/views',
      name: 'views',
      component: Views
    },
    {
      path: '/newMaterial',
      name: 'newMaterial',
      component: NewMaterial
    }
  ]
})