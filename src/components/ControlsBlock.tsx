import useGradientStore from '../store/GradientStore';
import ButtonToggle from './ButtonToggle';
import ColourBlock from './ColourBlock';
import Slider from './Slider';

export default function ControlsBlock() {
    const { gradient, setX, setY, addColour } = useGradientStore();
    return (
        <div className="glassmorphism mx-auto flex w-full flex-col gap-2 rounded-2xl border border-white bg-clip-padding pt-4 text-center shadow-xl md:p-8">
            <h2 className="font-roboto text-2xl font-bold">Radial Gradient CSS Generator</h2>
            <h3>Change the gradient via these settings</h3>
            <div className="flex w-full flex-col gap-4 rounded-2xl p-4 md:flex-row md:gap-8">
                <div className="h-fit flex-1 rounded-2xl border-2 border-white p-4 backdrop-blur-3xl">
                    <ButtonToggle />
                    <div className="mt-4 flex flex-col gap-2 md:order-3">
                        <Slider property="X" value={gradient.position.x} handleChange={setX} />
                        <Slider property="Y" value={gradient.position.y} handleChange={setY} />
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 rounded-2xl border-2 border-white p-4 backdrop-blur-3xl">
                    {gradient.colours.map((colour, index) => (
                        <ColourBlock
                            key={index}
                            colour={colour.hex}
                            value={colour.pos}
                            index={index}
                        />
                    ))}
                    <button className="btn glassmorphism mt-2" onClick={() => addColour()}>
                        Add Colour
                    </button>
                </div>
            </div>
        </div>
    );
}
