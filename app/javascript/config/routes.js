import VueRouter from 'vue-router';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/recipes/index')
    },
    {
      path: '/recipes/new',
      name: 'new_recipe_path',
      component: () => import('../pages/recipes/new')
    },
    {
      path: '/recipes/edit/:id',
      name: 'edit_recipe_path',
      component: () => import('../pages/recipes/edit')
    },
    {
      path: '/recipes/:id',
      name: 'recipe_path',
      component: () => import('../pages/recipes/show')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('../pages/errors/404')
    },
  ]
})
