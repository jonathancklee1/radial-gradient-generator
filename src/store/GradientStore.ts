import { create } from 'zustand';
import getRandomHex from '../helpers/getRandomHex';
type ShapeOption = 'circle' | 'ellipse';
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
    addColour: () => void;
    setColourPos: (value: number, index: number) => void;
    setX: (value: number) => void;
    setY: (value: number) => void;
    setShape: (shape: ShapeOption) => void;
    removeColour: (index: number) => void;
    getCssString: () => string;
    changeColourHex: (hex: string, index: number) => void;
}

const useGradientStore = create<GradientStore>((set) => ({
    gradient: {
        colours: [
            { hex: getRandomHex(), pos: 35 },
            { hex: getRandomHex(), pos: 60 },
        ],
        position: { x: 50, y: 50 },
        shape: 'ellipse',
    },
    addColour: () =>
        set((state) => ({
            gradient: {
                ...state.gradient,
                colours: [...state.gradient.colours, { hex: getRandomHex(), pos: 50 }],
            },
        })),
    setColourPos: (value: number, index: number) =>
        set((state) => {
            const newColourArray = state.gradient.colours.map((colour, arrIndex) => {
                if (index === arrIndex) {
                    return { hex: colour.hex, pos: value };
                } else {
                    return colour;
                }
            });
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
    removeColour: (index: number) =>
        set((state) => ({
            gradient: {
                ...state.gradient,
                colours: state.gradient.colours.filter((_, arrIndex) => arrIndex !== index),
            },
        })),
    getCssString: (): string => {
        const gradient = useGradientStore.getState();
        const { gradient: g } = gradient;
        return `radial-gradient(${g.shape} at ${g.position.x}% ${g.position.y}%, ${g.colours
            .map((colour) => `${colour.hex} ${colour.pos}%`)
            .join(', ')})`;
    },
    changeColourHex: (hex: string, index: number) =>
        set((state) => {
            console.log('Changing colour at index', index, 'to', hex);
            const newColourArray = state.gradient.colours.map((colour, arrIndex) => {
                if (index === arrIndex) {
                    return { hex: hex, pos: colour.pos };
                } else {
                    return colour;
                }
            });
            return {
                gradient: {
                    ...state.gradient,
                    colours: newColourArray,
                },
            };
        }),
}));
export default useGradientStore;
