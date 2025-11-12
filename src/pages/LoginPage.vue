<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-3xl font-bold text-blue-700 mb-8">Welcome to Expert App</h1>

    <div class="space-x-4">
      <button
        @click="loginAs('expert')"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Login as Expert
      </button>
      <button
        @click="loginAs('user')"
        class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Login as User
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function loginAs(role) {
  localStorage.setItem('role', role)
  router.push('/app/home')
}
</script>
