import { Trash } from '../assets/Trash';
import useGradientStore from '../store/GradientStore';
import Slider from './Slider';
interface ColourBlockProps {
    colour: string;
    value: number;
    index: number;
}

export default function ColourBlock({ colour, value, index }: ColourBlockProps) {
    const { setColourPos, removeColour } = useGradientStore();
    return (
        <div
            className="group relative mb-2 flex h-25 w-full flex-col justify-end overflow-hidden rounded-xl p-2"
            style={{ background: colour }}
        >
            <button
                className="btn btn-square glassmorphism absolute top-3 left-1/2 ml-auto -translate-x-1/2 -translate-y-10 transform rounded-2xl border-gray-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white"
                onClick={() => removeColour(index)}
            >
                <Trash />
            </button>
            <Slider
                property={colour}
                value={value}
                handleChange={(value) => setColourPos(value, index)}
            />
        </div>
    );
}
