<template>
  <div class="min-h-screen bg-gray-50 px-6 py-6">
    <h2 class="text-2xl font-semibold mb-6 text-gray-800">Friend Suggestions</h2>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div
        v-for="user in users"
        :key="user.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
      >
        <!-- Profile Image -->
        <img
          :src="user.image"
          alt="Profile"
          class="w-full h-56 object-cover rounded-t-xl"
        />

        <!-- Info Section -->
        <div class="p-4 text-center">
          <h3 class="text-md font-semibold text-gray-800 mb-1">
            {{ user.name }}
          </h3>
          <p class="text-sm text-gray-500 mb-3">
            {{ user.mutualFriends }} mutual friend<span v-if="user.mutualFriends > 1">s</span>
          </p>

          <!-- Buttons -->
          <div class="flex justify-between gap-2">
            <button
              class="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Confirm
            </button>
            <button
              class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  {
    id: 1,
    name: "Rajkumar Rajkumar",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    mutualFriends: 1,
  },
  {
    id: 2,
    name: "Popatlal Ji",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    mutualFriends: 7,
  },
  {
    id: 3,
    name: "Dinesh Gaurkhede",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    mutualFriends: 3,
  },
  {
    id: 4,
    name: "Vivek Budholia",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    mutualFriends: 5,
  },
  {
    id: 5,
    name: "Ankita Sharma",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    mutualFriends: 1,
  },
  {
    id: 6,
    name: "Amit Verma",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    mutualFriends: 8,
  },
  {
    id: 7,
    name: "Shreya Kapoor",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    mutualFriends: 6,
  },
  {
    id: 8,
    name: "Rohit Mehra",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    mutualFriends: 9,
  },
  {
    id: 9,
    name: "Priya Das",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    mutualFriends: 4,
  },
  {
    id: 10,
    name: "Aarav Singh",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    mutualFriends: 10,
  },
]);
</script>

<style scoped>
body {
  background-color: #f9fafb;
}
</style>
