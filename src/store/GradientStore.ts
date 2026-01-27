import { create } from "zustand";
type ShapeOption = "circle" | "ellipse";
interface ColourObject {
    hex: string;
    pos: number;
}
interface GradientStore {
    gradient: {
        colours: ColourObject[];
        position: { x: number; y: number };
        shape: ShapeOption;
    };
    addColour: (colour: string) => void;
    setColourPos: (value: number, index: number) => void;
    setX: (value: number) => void;
    setY: (value: number) => void;
    setShape: (shape: ShapeOption) => void;
}

const useGradientStore = create<GradientStore>((set) => ({
    gradient: {
        colours: [
            { hex: "#ffffff", pos: 50 },
            { hex: "#000000", pos: 50 },
        ],
        position: { x: 50, y: 50 },
        shape: "ellipse",
    },
    addColour: (colour: string) =>
        set((state) => ({
            gradient: {
                ...state.gradient,
                colours: [...state.gradient.colours, { hex: colour, pos: 50 }],
            },
        })),
    setColourPos: (value: number, index: number) =>
        set((state) => {
            const newColourArray = state.gradient.colours.map(
                (colour, arrIndex) => {
                    if (index === arrIndex) {
                        return { hex: colour.hex, pos: value };
                    } else {
                        return colour;
                    }
                },
            );
            return {
                gradient: {
                    ...state.gradient,
                    colours: newColourArray,
                },
            };
        }),
    setX: (value: number) =>
        set((state) => ({
            gradient: {
                ...state.gradient,
                position: {
                    ...state.gradient.position,
                    x: value,
                },
            },
        })),
    setY: (value: number) =>
        set((state) => ({
            gradient: {
                ...state.gradient,
                position: {
                    ...state.gradient.position,
                    y: value,
                },
            },
        })),
    setShape: (shape: ShapeOption) =>
        set((state) => ({
            gradient: {
                ...state.gradient,
                shape: shape,
            },
        })),
}));
export default useGradientStore;
