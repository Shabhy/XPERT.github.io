<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-[360px] text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Join our community</h2>
      <p class="text-gray-500 mb-6">Choose your role to get started</p>

      <div class="space-y-4">
        <button
          @click="$router.push('/expert')"
          class="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Expert
        </button>

        <button
          @click="$router.push('/user')"
          class="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          User
        </button>

        <button
          class="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Register
        </button>

        <button
          class="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Login
        </button>
      </div>

      <p class="text-xs text-gray-500 mt-6">
        By continuing, you agree to our
        <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> and
        <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
