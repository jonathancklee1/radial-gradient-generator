import useGradientStore from "../store/GradientStore";
import Slider from "./Slider";
interface ColourBlockProps {
    colour: string;
    value: number;
    index: number;
}

export default function ColourBlock({
    colour,
    value,
    index,
}: ColourBlockProps) {
    console.log(index);
    const { setColourPos } = useGradientStore();
    return (
        <>
            <div className="w-full h-16" style={{ background: colour }} />
            <Slider
                value={value}
                property={colour}
                handleChange={(value) => setColourPos(value, index)}
            />
        </>
    );
}
