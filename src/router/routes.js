export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Article',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/Search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  }
]
