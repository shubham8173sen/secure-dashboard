// src/stores/userStore.ts
import create from 'zustand';

interface UserState {
  user: any;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

