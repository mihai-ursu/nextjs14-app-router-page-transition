import { create } from "zustand";

interface TransitionState {
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
}

export const usePageTransitionStore = create<TransitionState>()((set) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating) => set({ isAnimating }),
}));
