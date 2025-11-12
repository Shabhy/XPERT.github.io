<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Floating Chat Button -->
    <button
      @click="toggleChat"
      class="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition transform hover:scale-110"
    >
      💬
    </button>

    <!-- Chat Window -->
    <div
      v-if="isOpen"
      class="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-fadeIn"
    >
      <!-- Header -->
      <div class="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold">Messages</h3>
        <button @click="toggleChat" class="text-lg font-bold hover:text-gray-300">×</button>
      </div>

      <!-- Chat List -->
      <div class="h-64 overflow-y-auto p-3 bg-gray-50">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.sent ? 'text-right' : 'text-left'"
          class="mb-3"
        >
          <div
            :class="msg.sent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'"
            class="inline-block px-3 py-2 rounded-xl text-sm max-w-[70%]"
          >
            {{ msg.text }}
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-3 flex items-center bg-white border-t border-gray-200">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
          class="flex-1 border rounded-full px-3 py-2 text-sm focus:ring focus:ring-blue-200 outline-none"
        />
        <button
          @click="sendMessage"
          class="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-2"
        >
          ➤
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBox",
  data() {
    return {
      isOpen: false,
      newMessage: "",
      messages: [
        { text: "Hey there 👋", sent: false },
        { text: "Hello! How can I help you?", sent: false },
      ],
    };
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen;
    },
    sendMessage() {
      if (!this.newMessage.trim()) return;
      this.messages.push({ text: this.newMessage, sent: true });
      this.newMessage = "";

      // Simulated auto-response
      setTimeout(() => {
        this.messages.push({
          text: "Got it! I’ll get back to you soon 😊",
          sent: false,
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}
</style>
