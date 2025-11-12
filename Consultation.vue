<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <h1 class="text-3xl font-extrabold mb-10 text-center text-indigo-800 tracking-wide">
      🌟 Consultation Experts
    </h1>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="expert in experts"
        :key="expert.id"
        class="group relative bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
      >
        <!-- Glow effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 rounded-3xl blur-md transition"></div>

        <div class="flex flex-col items-center text-center">
          <!-- Profile image with glowing ring -->
          <div class="relative mb-4">
            <div
              class="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse blur-[1px]"
            ></div>
            <img
              :src="expert.image"
              alt="Expert"
              class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10"
            />
          </div>

          <h2 class="text-lg font-semibold text-gray-900">{{ expert.name }}</h2>
          <p class="text-indigo-500 font-medium mb-2">{{ expert.title }}</p>

          <p class="text-gray-600 text-sm mb-4 px-4">
            {{ expert.about }}
          </p>

          <div class="flex justify-center gap-4 text-gray-700 text-sm mb-4">
            <span class="bg-blue-100 px-3 py-1 rounded-full text-blue-600 font-semibold">
              {{ expert.experience }}
            </span>
            <span class="bg-green-100 px-3 py-1 rounded-full text-green-600 font-semibold">
              ₹{{ expert.fee }}
            </span>
          </div>

          <!-- Buttons -->
          <div class="flex gap-4">
            <button
              @click="startChat(expert)"
              class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              💬 Chat Now
            </button>
            <button
              @click="bookSession(expert)"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium"
            >
              📅 Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultationPage",
  data() {
    return {
      experts: [
        {
          id: 1,
          name: "Dr. Priya Sharma",
          title: "Counselor",
          experience: "7+ yrs",
          fee: 500,
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
          about:
            "Helps individuals manage stress and emotional balance through practical, result-focused therapy.",
        },
        {
          id: 2,
          name: "Dr. Aarav Kapoor",
          title: "Clinical Psychologist",
          experience: "8+ yrs",
          fee: 650,
          image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
          about:
            "Expert in cognitive-behavioral therapy, guiding clients through anxiety and confidence issues.",
        },
        {
          id: 3,
          name: "Major Rhea Sinha (Retd.)",
          title: "Resilience Coach",
          experience: "10+ yrs",
          fee: 700,
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
          about:
            "Teaches leadership, focus, and discipline through real military-tested techniques.",
        },
        {
          id: 4,
          name: "Nisha Arora",
          title: "Relationship Therapist",
          experience: "12+ yrs",
          fee: 550,
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
          about:
            "Helps couples and families rebuild communication, trust, and emotional harmony.",
        },
        {
          id: 5,
          name: "Dr. Ishaan Verma",
          title: "Child Counselor",
          experience: "7+ yrs",
          fee: 600,
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922659.png",
          about:
            "Guides young minds through focus issues, exam stress, and emotional growth.",
        },
        {
          id: 6,
          name: "Lt. Meera Patel",
          title: "Motivational & Discipline Coach",
          experience: "6+ yrs",
          fee: 550,
          image: "https://cdn-icons-png.flaticon.com/512/2922/2922579.png",
          about:
            "Empowers individuals with structure, purpose, and grit to achieve excellence in daily life.",
        },
      ],
    };
  },
  methods: {
    bookSession(expert) {
      this.$router.push({ name: "ExpertProfile", params: { id: expert.id } });
    },
    startChat(expert) {
      alert(`Starting chat with ${expert.name}...`);
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
