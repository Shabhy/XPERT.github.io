<template>
  <div class="min-h-screen bg-gray-100 flex flex-col text-gray-900">
    <!-- Navbar -->
    <nav class="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 class="text-xl font-bold text-blue-700">Expert App</h1>
  
      <div class="flex items-center space-x-6 text-gray-700 font-medium">
        <router-link class="hover:text-blue-600" to="/app/home">🏠 Home</router-link>
        <router-link class="hover:text-blue-600" to="/app/friends">👥 Friends</router-link>
        <router-link to="/app/messages">💬 Messages</router-link>
        <router-link class="hover:text-blue-600" to="/app/consultation">📞 Consultation</router-link>
        <router-link class="hover:text-blue-600" to="/app/profile">{{ profileLabel }}</router-link>
        


        <!-- 🌙 Role Switch Button -->
        <button 
          @click="switchRole"
          class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
        >
          Switch to {{ oppositeRoleLabel }}
        </button>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>

    <!-- Floating Chat Box -->
    <ChatBox />

    <!-- Footer -->
    <footer class="bg-white shadow-inner py-4 text-center text-sm text-gray-500">
      © 2025 ExpertApp
    </footer>
  </div>
</template>

<script>
import ChatBox from "@/components/ChatBox.vue"; // ✅ Import it here

export default {
  name: 'DashboardLayout',
  components: {
    ChatBox // ✅ Register it here
  },
  data() {
    return {
      role: localStorage.getItem('role') || 'user'
    };
  },
  computed: {
    profileLabel() {
      return this.role === 'expert' ? '👤 Expert Profile' : '👤 User Profile';
    },
    oppositeRoleLabel() {
      return this.role === 'expert' ? 'User Mode' : 'Expert Mode';
    }
  },
  methods: {
    switchRole() {
      this.role = this.role === 'expert' ? 'user' : 'expert';
      localStorage.setItem('role', this.role);
      window.location.reload();
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
