import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../components/DashboardLayout.vue'
import LoginPage from '../pages/LoginPage.vue'
import Home from '../pages/Home.vue'
import FriendsSuggestion from '../pages/FriendsSuggestion.vue'
import Consultation from '../pages/Consultation.vue'
import Profile from '../pages/Profile.vue'
import ChatBox from "@/components/ChatBox.vue"
import Chats from '../pages/Chats.vue';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/app',
    component: DashboardLayout,
    children: [
      { path: 'home', component: Home },
      { path: 'friends', component: FriendsSuggestion }, // changed from 'social'
      { path: 'consultation', component: Consultation },
      { path: 'chat', component: ChatBox },
      { path: 'messages', component: Chats },
      { path: 'profile', component: Profile },
      { path: 'chat', component: ChatBox } // <-- new creative chat page
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Redirect to login if no role is set
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('role')
  if (!role && to.path !== '/') {
    next('/')
  } else {
    next()
  }
})

export default router
