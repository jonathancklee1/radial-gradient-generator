import { create } from "zustand";

interface GradientStore {
    gradient: {
        colors: string[];
        position: { x: number; y: number };
    };
    updateGradient: (newGradient: GradientStore["gradient"]) => void;
}

const useGradientStore = create<GradientStore>((set) => ({
    gradient: {
        colors: ["#ffffff", "#000000"],
        position: { x: 50, y: 50 },
    },
    updateGradient: (newGradient) => set({ gradient: newGradient }),
}));
export default useGradientStore;
