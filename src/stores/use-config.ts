import { create } from 'zustand';
import { Theme } from '@/registry/themes';

export type Config = {
  theme: Theme['name'];
  setTheme: (theme: Theme['name']) => void;
};

export const useConfig = create<Config>(set => ({
  theme: 'zinc',
  setTheme: (theme: Theme['name']) => set({ theme }),
  
}));
