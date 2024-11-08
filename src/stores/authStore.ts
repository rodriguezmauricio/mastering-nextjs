/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type User = {
    id: string;
    name: string;
    email: string;
};

type AuthState = {
    user: User | null;
    loading: boolean;
    login: (userData: User) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set: any) => ({
    user: null,
    loading: true,
    login: (userData: User | null) => set({ user: userData }),
    logout: () => set({ user: null }),
}));
