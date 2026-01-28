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
        <div>
            <div
                className="relative mb-2 flex h-25 w-full flex-col justify-end rounded-xl p-2"
                style={{ background: colour }}
            >
                <button
                    className="btn btn-square absolute top-3 left-1/2 ml-auto -translate-x-1/2 transform rounded-2xl hover:bg-white"
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
        </div>
    );
}
