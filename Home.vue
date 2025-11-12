<template>
  <div class="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen flex justify-center">
    <div class="w-full max-w-7xl flex gap-6 p-6">
      
      <!-- LEFT PANEL -->
      <aside class="hidden lg:block w-1/5 space-y-4">
        <div class="bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-lg">
          <div class="flex items-center space-x-3">
            <img src="https://i.pravatar.cc/60?img=12" class="w-14 h-14 rounded-full shadow-lg" />
            <div>
              <h3 class="font-semibold text-gray-800 text-lg">You</h3>
              <p class="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>

        <div class="bg-white/60 backdrop-blur-xl p-4 rounded-2xl shadow-lg">
          <h4 class="font-semibold mb-3 text-gray-800">Shortcuts</h4>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li class="hover:text-blue-600 cursor-pointer">🏠 Home</li>
            <li class="hover:text-blue-600 cursor-pointer">💬 Messages</li>
            <li class="hover:text-blue-600 cursor-pointer">📞 Consultations</li>
            <li class="hover:text-blue-600 cursor-pointer">🛍️ Marketplace</li>
            <li class="hover:text-blue-600 cursor-pointer">👤 My Profile</li>
          </ul>
        </div>
      </aside>

      <!-- FEED -->
      <main class="flex-1 max-w-3xl mx-auto space-y-8">
        <!-- Create Post -->
        <div class="bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div class="flex items-center space-x-3">
            <img src="https://i.pravatar.cc/40" alt="User" class="w-12 h-12 rounded-full shadow" />
            <input
              v-model="newPost.text"
              type="text"
              placeholder="What's on your mind?"
              class="w-full border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div class="flex items-center justify-between mt-3 px-2">
            <div class="flex space-x-3 text-gray-500">
              <label class="cursor-pointer">📷 <input type="file" class="hidden" @change="onImageUpload" /></label>
              <span>🎥</span>
              <span>📍</span>
              <span>😊</span>
            </div>
            <button
              @click="addPost"
              class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Post
            </button>
          </div>
        </div>

        <!-- Posts -->
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition"
        >
          <div class="flex items-center space-x-4 mb-3">
            <img :src="post.userAvatar" class="w-12 h-12 rounded-full shadow" />
            <div>
              <h3 class="font-semibold text-gray-900">{{ post.userName }}</h3>
              <p class="text-xs text-gray-400">{{ post.time }}</p>
            </div>
          </div>

          <p class="text-gray-700 mb-3 text-base leading-relaxed">{{ post.text }}</p>
          <img
            v-if="post.image"
            :src="post.image"
            alt="Post"
            class="rounded-xl max-h-96 w-full object-cover mb-3 shadow-md"
          />

          <div class="flex justify-between text-gray-600 text-sm font-medium">
            <span>❤️ {{ post.likes }}</span>
            <span>💬 {{ post.comments }}</span>
            <span>👁️ {{ post.views }}</span>
          </div>
        </div>
      </main>

      <!-- RIGHT PANEL -->
      <aside class="hidden lg:block w-1/4 space-y-4">
        <div class="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-lg">
          <h4 class="font-semibold mb-4 text-gray-800">Suggested Experts</h4>
          <div v-for="exp in experts" :key="exp.id" class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-3">
              <img :src="exp.image" class="w-10 h-10 rounded-full shadow" />
              <div>
                <p class="font-medium">{{ exp.name }}</p>
                <p class="text-xs text-gray-500">{{ exp.speciality }}</p>
              </div>
            </div>
            <button class="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-lg hover:bg-blue-200">Chat</button>
          </div>
        </div>
      </aside>

      <!-- FLOATING REACTION BAR -->
      <div
        class="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full p-4 shadow-xl cursor-pointer hover:scale-110 transition"
        @click="floatReaction"
      >
        ❤️
      </div>

      <transition-group name="float" tag="div">
        <div
          v-for="(r, i) in reactions"
          :key="r.id"
          class="absolute bottom-12 right-8 text-2xl"
          :style="{ transform: `translateY(-${r.offset}px)` }"
        >
          {{ r.icon }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newPost = ref({ text: '', image: null })

const posts = ref([
  { userName: 'Dr. Rhea Kapoor', userAvatar: 'https://i.pravatar.cc/100?img=3', time: '1h', text: 'Session complete! Mental health is wealth 💬 #therapy', image: null, likes: 43, comments: 12, views: 90 },
  { userName: 'Aarav Patel', userAvatar: 'https://i.pravatar.cc/100?img=5', time: '3h', text: 'Today’s talk: building confidence under pressure ⚡', image: 'https://source.unsplash.com/random/800x400?motivation', likes: 88, comments: 14, views: 300 },
  { userName: 'Dr. Elizabeth', userAvatar: 'https://i.pravatar.cc/100?img=6', time: '1d', text: 'Breathe. Reflect. Reset. 🌿', image: 'https://source.unsplash.com/random/800x400?peace', likes: 66, comments: 7, views: 140 },
  { userName: 'Neha Verma', userAvatar: 'https://i.pravatar.cc/100?img=8', time: '2d', text: 'Grateful for the little wins today 🙌 #selfcare', image: null, likes: 21, comments: 4, views: 75 },
  { userName: 'Rajat Singh', userAvatar: 'https://i.pravatar.cc/100?img=9', time: '2d', text: 'I finally hit my 5th client milestone this week 🚀', image: null, likes: 58, comments: 9, views: 100 },
  { userName: 'Samara', userAvatar: 'https://i.pravatar.cc/100?img=2', time: '3d', text: 'Hydrate. Meditate. Dominate. 💧🧘', image: 'https://source.unsplash.com/random/800x400?yoga', likes: 76, comments: 16, views: 200 },
  { userName: 'Ethan Carter', userAvatar: 'https://i.pravatar.cc/100?img=12', time: '3d', text: 'Life is all about balance 🔥', image: null, likes: 90, comments: 20, views: 240 },
  { userName: 'Sophia Bennett', userAvatar: 'https://i.pravatar.cc/100?img=1', time: '4d', text: 'Mindset shapes your reality. Change that, change everything.', image: 'https://source.unsplash.com/random/800x400?mindset', likes: 101, comments: 25, views: 310 },
  { userName: 'Mira Sharma', userAvatar: 'https://i.pravatar.cc/100?img=13', time: '5d', text: 'Your body hears everything your mind says 🧠💪', image: 'https://source.unsplash.com/random/800x400?fitness', likes: 67, comments: 10, views: 200 },
  { userName: 'You', userAvatar: 'https://i.pravatar.cc/100?img=15', time: 'Just now', text: 'Feeling inspired to start journaling again ✍️', image: null, likes: 12, comments: 2, views: 25 },
])

const experts = ref([
  { id: 1, name: 'Dr. Priya Mishra', speciality: 'Clinical Psychologist', image: 'https://i.pravatar.cc/100?img=4' },
  { id: 2, name: 'Arjun Nair', speciality: 'Motivational Coach', image: 'https://i.pravatar.cc/100?img=9' },
  { id: 3, name: 'Esha Menon', speciality: 'Wellness Expert', image: 'https://i.pravatar.cc/100?img=11' },
])

// image upload
const onImageUpload = (e) => {
  const file = e.target.files[0]
  if (file) newPost.value.image = URL.createObjectURL(file)
}

// add post
const addPost = () => {
  if (!newPost.value.text && !newPost.value.image) return
  posts.value.unshift({
    userName: 'You',
    userAvatar: 'https://i.pravatar.cc/40?img=12',
    time: 'Just now',
    text: newPost.value.text,
    image: newPost.value.image,
    likes: 0,
    comments: 0,
    views: 0,
  })
  newPost.value = { text: '', image: null }
}

// floating reactions
const reactions = ref([])
let id = 0
const floatReaction = () => {
  const icons = ['❤️', '🔥', '💪', '💫', '👏']
  const icon = icons[Math.floor(Math.random() * icons.length)]
  const newReaction = { id: id++, icon, offset: 0 }
  reactions.value.push(newReaction)
  let interval = setInterval(() => {
    newReaction.offset += 10
    if (newReaction.offset > 200) {
      reactions.value = reactions.value.filter((r) => r.id !== newReaction.id)
      clearInterval(interval)
    }
  }, 60)
}
</script>

<style scoped>
.float-enter-active,
.float-leave-active {
  transition: all 0.8s ease;
}
.float-enter-from {
  opacity: 0;
  transform: translateY(0);
}
.float-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
</style>
