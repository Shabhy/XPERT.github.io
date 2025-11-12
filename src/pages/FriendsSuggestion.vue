<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">🤝 Friend Suggestions</h1>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="user in suggestions"
        :key="user.id"
        class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 text-center"
      >
        <img
          :src="user.avatar"
          alt="user"
          class="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />
        <h2 class="mt-4 text-xl font-semibold text-gray-800">{{ user.name }}</h2>
        <p class="text-sm text-gray-500 mb-3">{{ user.occupation }}</p>
        <button
          @click="addFriend(user)"
          class="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow"
        >
          Add Friend
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const suggestions = ref([
  {
    id: 1,
    name: "Aarav Mehta",
    occupation: "Fitness Trainer",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 2,
    name: "Ritika Sen",
    occupation: "Therapist",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Kabir Malhotra",
    occupation: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    id: 4,
    name: "Sanya Bhatnagar",
    occupation: "Psychologist",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 5,
    name: "Rehan Joshi",
    occupation: "Yoga Instructor",
    avatar: "https://i.pravatar.cc/150?img=52",
  },
]);

const addFriend = (user) => {
  alert(`Friend request sent to ${user.name}!`);
};
</script>
