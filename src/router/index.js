import { createRouter, createWebHistory } from 'vue-router'
import { FavoritesPage, HomePage, FavoritesCityPage} from '@/lib/pages'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage
    },
    {
      path: '/favorites/:city',
      name: 'favorites-city',
      component: FavoritesCityPage
    }
  ]
})

export default router
