import useGradientStore from '../store/GradientStore';
import ButtonToggle from './ButtonToggle';
import ColourBlock from './ColourBlock';
import Slider from './Slider';

export default function ControlsBlock() {
  const { gradient, setX, setY, addColour } = useGradientStore();
  return (
    <div className="bg-secondary-content mx-auto flex w-full flex-col gap-2 rounded-2xl p-3 text-center">
      <h2 className="font-roboto text-2xl font-bold">Radial Gradient CSS Generator</h2>
      <h3>Change the gradient via these settings</h3>

      <ButtonToggle />
      <div className="mt-4 flex flex-col gap-2">
        <Slider property="X" value={gradient.position.x} handleChange={setX} />
        <Slider property="Y" value={gradient.position.y} handleChange={setY} />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {gradient.colours.map((colour, index) => (
          <ColourBlock key={index} colour={colour.hex} value={colour.pos} index={index} />
        ))}
      </div>
      <button className="btn btn-primary mt-4" onClick={() => addColour()}>
        Add Colour
      </button>
    </div>
  );
}
