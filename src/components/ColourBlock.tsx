import useGradientStore from '../store/GradientStore';
import Slider from './Slider';
interface ColourBlockProps {
  colour: string;
  value: number;
  index: number;
}

export default function ColourBlock({ colour, value, index }: ColourBlockProps) {
  const { setColourPos } = useGradientStore();
  return (
    <div>
      <div
        className="mb-2 flex h-25 w-full flex-col justify-end p-4"
        style={{ background: colour }}
      >
        <Slider value={value} handleChange={(value) => setColourPos(value, index)} />
      </div>
    </div>
  );
}
