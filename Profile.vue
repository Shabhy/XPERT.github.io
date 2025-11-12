<template>
  <div>
    <!-- Loading state -->
    <div v-if="loading" class="text-center p-6">
      Loading your profile...
    </div>

    <!-- Conditional rendering -->
    <component
      v-else
      :is="profileComponent"
      :user="userData"
    />
  </div>
</template>

<script>
import UserProfile from '@/pages/UserProfile.vue'
import ExpertProfile from '@/pages/ExpertProfile.vue'

export default {
  name: 'Profile',
  components: { UserProfile, ExpertProfile },
  data() {
    return {
      loading: true,
      userData: null,
      profileComponent: null,
    }
  },
  mounted() {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {}
    this.userData = storedUser

    // Decide which profile to load
    if (storedUser.role === 'expert') {
      this.profileComponent = 'ExpertProfile'
    } else {
      this.profileComponent = 'UserProfile'
    }

    this.loading = false
  },
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
