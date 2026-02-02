import { useRef, useState } from 'react';
import { Trash } from '../assets/Trash';
import useGradientStore from '../store/GradientStore';
import { ColourPicker } from './ColourPicker';
import Slider from './Slider';
interface ColourBlockProps {
    colour: string;
    value: number;
    index: number;
}

export default function ColourBlock({ colour, value, index }: ColourBlockProps) {
    const { setColourPos, removeColour } = useGradientStore();
    const [showPicker, setShowPicker] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
        <>
            <div
                className="group relative mb-2 flex h-25 w-full flex-col justify-end overflow-hidden rounded-xl p-2"
                style={{ background: colour }}
            >
                {index > 0 && (
                    <button
                        className="btn btn-square glass-dark absolute top-3 left-1/2 z-10 ml-auto -translate-x-1/2 -translate-y-10 transform rounded-2xl opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        onClick={() => removeColour(index)}
                        ref={buttonRef}
                    >
                        <Trash />
                    </button>
                )}
                <Slider
                    property={colour}
                    value={value}
                    handleChange={(value) => setColourPos(value, index)}
                    onChangePicker={() => setShowPicker(!showPicker)}
                />
            </div>

            <div className={`absolute left-30 z-10 ${showPicker ? '' : 'hidden'}`}>
                <ColourPicker
                    colour={colour}
                    onClose={() => setShowPicker(false)}
                    index={index}
                    buttonRef={buttonRef}
                />
            </div>
        </>
    );
}
