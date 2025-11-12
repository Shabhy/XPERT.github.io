<template>
  <div class="flex h-[80vh] bg-white shadow-lg rounded-2xl overflow-hidden">
    <!-- Chat list (like Messenger sidebar) -->
    <div class="w-1/3 bg-gray-50 border-r">
      <div class="p-4 border-b font-semibold text-blue-700">💬 Chats</div>
      <ul class="overflow-y-auto h-full">
        <li
          v-for="(chat, i) in chats"
          :key="i"
          class="flex items-center justify-between p-3 hover:bg-blue-100 cursor-pointer"
          @click="openChat(chat)"
        >
          <div>
            <p class="font-medium">{{ chat.name }}</p>
            <p class="text-sm text-gray-500 truncate w-36">{{ chat.lastMessage }}</p>
          </div>
          <span class="text-xs text-gray-400">{{ chat.time }}</span>
        </li>
      </ul>
    </div>

    <!-- Active chat area -->
    <div class="flex flex-col flex-1">
      <div class="p-4 border-b bg-blue-50 font-semibold">
        {{ activeChat ? activeChat.name : "Select a chat" }}
      </div>

      <div class="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div
          v-for="(msg, i) in activeChat?.messages || []"
          :key="i"
          :class="msg.from === 'me' ? 'text-right' : 'text-left'"
          class="my-2"
        >
          <div
            :class="msg.from === 'me' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'"
            class="inline-block px-4 py-2 rounded-2xl max-w-[70%]"
          >
            {{ msg.text }}
          </div>
        </div>
      </div>

      <!-- Message input -->
      <div class="flex items-center p-3 border-t bg-white">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type a message..."
          class="flex-1 border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="sendMessage"
          class="ml-2 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const chats = ref([
  { name: "Dr. Priya Mishra", lastMessage: "See you tomorrow!", time: "2h", messages: [] },
  { name: "Arjun Nair", lastMessage: "Sure, let's discuss.", time: "5h", messages: [] },
  { name: "Esha Menon", lastMessage: "Take care!", time: "1d", messages: [] },
]);

const activeChat = ref(null);
const newMessage = ref("");

const openChat = (chat) => {
  activeChat.value = chat;
};

const sendMessage = () => {
  if (!newMessage.value.trim() || !activeChat.value) return;
  activeChat.value.messages.push({ from: "me", text: newMessage.value });
  newMessage.value = "";
};
</script>
