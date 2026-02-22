import { create } from 'zustand';

export const useScrollStore = create((set) => ({
    scrollToProjects: false,
    scrollToBackHero: false,


    setScrollToProjects: (value) => set({ scrollToProjects: value }),
    setScrollToBackHero: (value) => set({ scrollToBackHero: value }),

}))