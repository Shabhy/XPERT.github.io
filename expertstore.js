import { defineStore } from 'pinia'

export const useExpertStore = defineStore('expert', {
  state: () => ({
    selectedExpert: null,
  }),
  actions: {
    setExpert(expert) {
      this.selectedExpert = expert
    },
  },
})
