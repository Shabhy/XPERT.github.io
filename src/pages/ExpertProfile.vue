<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <!-- Toggle Profile Type -->
    <div class="flex justify-end mb-6 space-x-0">
      <button
        @click="viewMode = 'user'"
        :class="viewMode === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
        class="px-5 py-2 font-semibold rounded-l-xl transition-all duration-300 hover:scale-105"
      >
        User
      </button>
      <button
        @click="viewMode = 'expert'"
        :class="viewMode === 'expert' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
        class="px-5 py-2 font-semibold rounded-r-xl transition-all duration-300 hover:scale-105"
      >
        Expert
      </button>
    </div>

    <!-- Expert Profile -->
    <div
      v-if="viewMode === 'expert' && expert"
      class="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02] hover:shadow-blue-200 relative overflow-hidden"
    >
      <!-- Glowing Circle Background -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <!-- Header Section -->
      <div class="flex items-center space-x-6 mb-8">
        <div class="relative">
          <img
            :src="expert.image"
            alt="Expert"
            class="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-500 hover:scale-110"
          />
          <!-- Rotating glowing ring -->
          <div class="absolute inset-0 rounded-full border-4 border-blue-300 animate-spin-slow"></div>
        </div>
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900">{{ expert.name }}</h1>
          <p class="text-gray-700 text-lg font-medium">{{ expert.title }}</p>
          <p class="text-gray-500 mt-1">📍 {{ expert.location }}</p>
          <p class="text-blue-700 mt-2 font-semibold text-lg">💰 ₹{{ expert.fee }} per session</p>
        </div>
      </div>

      <!-- About -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 text-gray-900">About</h2>
        <p class="text-gray-700 leading-relaxed text-lg">{{ expert.details.description }}</p>
      </div>

      <!-- Qualifications & Experience -->
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 class="text-xl font-semibold mb-2 text-gray-900">Qualifications</h2>
          <ul class="list-disc ml-6 text-gray-700 space-y-1">
            <li v-for="(q, index) in expert.details.qualifications" :key="index">
              {{ q }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2 text-gray-900">Experience</h2>
          <ul class="list-disc ml-6 text-gray-700 space-y-1">
            <li v-for="(exp, index) in expert.details.experience" :key="index">
              {{ exp }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2 text-gray-900">Certifications & Achievements</h2>
        <ul class="list-disc ml-6 text-gray-700 space-y-1">
          <li v-for="(cert, index) in expert.details.certifications" :key="index">
            {{ cert }}
          </li>
        </ul>
      </div>

      <!-- Specialization & Contact -->
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 class="text-xl font-semibold mb-2 text-gray-900">Specializations</h2>
          <ul class="list-disc ml-6 text-gray-700 space-y-1">
            <li v-for="(spec, index) in expert.details.specialization" :key="index">
              {{ spec }}
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2 text-gray-900">Contact Details</h2>
          <p class="text-gray-700">📧 {{ expert.contact.email }}</p>
          <p class="text-gray-700">📞 {{ expert.contact.phone }}</p>
          <p class="text-gray-700">🌐 {{ expert.contact.website }}</p>
        </div>
      </div>

      <!-- Testimonials Section -->
      <div class="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-inner">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">What People Say 💬</h2>
        <div class="space-y-4 max-h-64 overflow-y-auto">
          <div
            v-for="(comment, index) in comments"
            :key="index"
            class="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <p class="text-gray-700 italic">"{{ comment.text }}"</p>
            <p class="text-gray-500 text-sm mt-2">– {{ comment.name }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex justify-center mt-10">
        <button
          @click="startSession"
          class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-md transition-all duration-300 hover:scale-105"
        >
          Start Consultation
        </button>
      </div>
    </div>

    <!-- User Profile -->
    <div
      v-if="viewMode === 'user'"
      class="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-indigo-200"
    >
      <h1 class="text-3xl font-extrabold text-gray-900 mb-6">User Profile 👤</h1>
      <div class="space-y-3 text-lg text-gray-700">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Member Since:</strong> {{ user.memberSince }}</p>
        <p><strong>Past Consultations:</strong></p>
        <ul class="list-disc ml-6">
          <li v-for="(session, index) in user.pastSessions" :key="index">
            {{ session }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertProfile",
  data() {
    return {
      viewMode: "expert",
      expert: null,
      comments: [
        { name: "Ananya Mehta", text: "Her sessions are life-changing!" },
        { name: "Rahul Verma", text: "Clear, motivating, and practical advice." },
        { name: "Sneha Kapoor", text: "Loved how approachable she was." },
        { name: "Aman Yadav", text: "Helped me build discipline like never before." },
        { name: "Ritika Singh", text: "Empathy and strength combined." },
        { name: "Karan Malhotra", text: "Best leadership guidance I've had." },
        { name: "Priya Das", text: "The confidence boost I needed!" },
      ],
      user: {
        name: "Aditi Chauhan",
        email: "aditi.chauhan@example.com",
        memberSince: "March 2023",
        pastSessions: [
          "Stress Management – Dr. Priya Sharma",
          "Leadership & Focus Coaching – Major Rhea Sinha",
          "Mindfulness Workshop – June 2024",
        ],
      },
    };
  },
  mounted() {
    const expertId = this.$route.params.id;
    const experts = [
      {
        id: 1,
        name: "Dr. Priya Sharma",
        title: "Counselor",
        fee: 500,
        location: "Mumbai, India",
        image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
        contact: {
          email: "priya.sharma@example.com",
          phone: "+91 9876543210",
          website: "www.priyasharmacounseling.in",
        },
        details: {
          description:
            "Dr. Priya Sharma is a certified counselor with 7+ years of experience helping individuals manage stress, anxiety, and emotional trauma.",
          qualifications: [
            "Ph.D. in Psychology, Delhi University",
            "Certified Cognitive Behavioral Therapist",
          ],
          experience: [
            "Senior Counselor at MindCare (2020–Present)",
            "Therapy Lead at Wellness360 (2017–2020)",
          ],
          certifications: [
            "CBT Practitioner Certification (London)",
            "Mindfulness Training (Stanford University)",
          ],
          specialization: [
            "Emotional Wellness",
            "Stress Management",
            "Relationship Therapy",
          ],
        },
      },
      {
        id: 2,
        name: "Major Rhea Sinha (Retd.)",
        title: "Leadership & Mental Resilience Coach",
        fee: 700,
        location: "Delhi, India",
        image: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
        contact: {
          email: "rhea.sinha@resiliencecoach.in",
          phone: "+91 9856321478",
          website: "www.rheasinha.com",
        },
        details: {
          description:
            "Ex-Army Officer turned leadership coach, Major Rhea helps professionals build confidence, discipline, and purpose-driven resilience.",
          qualifications: [
            "MBA in Leadership Psychology",
            "Certified NLP Practitioner",
          ],
          experience: [
            "10 years Indian Army (Leadership & Operations)",
            "5 years Corporate Leadership Trainer",
          ],
          certifications: [
            "Emotional Intelligence Coaching – ICF",
            "Military Mental Strength Program Facilitator",
          ],
          specialization: [
            "Discipline Building",
            "Mental Strength",
            "Focus & Performance Coaching",
          ],
        },
      },
    ];
    this.expert = experts.find((e) => e.id == expertId);
  },
  methods: {
    startSession() {
      this.$router.push({
        name: "ConsultationSession",
        params: { id: this.expert.id },
      });
    },
  },
};
</script>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}
</style>
