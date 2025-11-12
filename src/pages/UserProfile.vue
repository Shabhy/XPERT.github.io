<template>
  <div class="p-8 bg-white shadow-md rounded-xl max-w-2xl mx-auto mt-10">
    <h2 class="text-2xl font-bold text-blue-600 mb-4">👤 User Profile</h2>
    <div class="space-y-3">
      <p><strong>Name:</strong> {{ user?.name || 'Anonymous User' }}</p>
      <p><strong>Email:</strong> {{ user?.email || 'Not provided' }}</p>
      <p><strong>Role:</strong> {{ user?.role || 'user' }}</p>
      <p class="text-gray-600">
        Welcome to your user dashboard! Here you can explore experts, book consultations, and manage your preferences.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    user: Object
  }
}
</script>

<style scoped>
p {
  font-size: 1.1rem;
}
</style>
