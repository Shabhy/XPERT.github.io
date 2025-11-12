<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-96">
      <h2 class="text-3xl font-bold text-center mb-6 text-blue-600">
        Welcome to Expert App
      </h2>

      <div class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
        />

        <div class="flex justify-between items-center mt-3">
          <label class="text-gray-600 text-sm font-medium">Login as:</label>
          <select
            v-model="role"
            class="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring focus:ring-blue-200"
          >
            <option value="user">User</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <button
          @click="login"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const role = ref('user')

// ✅ Core login logic
const login = () => {
  if (!email.value || !password.value) {
    alert('Please enter your email and password.')
    return
  }

  // Simulated user data — replace later with API
  const userData = {
    name: email.value.split('@')[0],
    email: email.value,
    role: role.value,
  }

  // 🧠 Save to localStorage for Profile.vue
  localStorage.setItem('user', JSON.stringify(userData))

  // 🔁 Redirect based on role
  if (role.value === 'expert') {
    router.push('/expert/profile')
  } else {
    router.push('/user/profile')
  }
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
