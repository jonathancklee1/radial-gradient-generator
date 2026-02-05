import { Shuffle } from '../assets/Shuffle';
import useGradientStore from '../store/GradientStore';
import ButtonToggle from './ButtonToggle';
import ColourBlock from './ColourBlock';
import Slider from './Slider';

export default function ControlsBlock() {
    const {
        gradient,
        setX,
        setY,
        addColour,
        shuffleColours,
        setNoiseFilter,
        noiseFilter,
        setShape,
    } = useGradientStore();
    console.log(noiseFilter);
    return (
        <div className="glass-dark mx-auto flex w-full flex-col gap-2 rounded-2xl border border-white bg-clip-padding pt-4 text-center shadow-xl md:p-8">
            <h2 className="font-roboto text-2xl font-bold">Radial Gradient CSS Generator</h2>
            <h3>Change the gradient via these settings</h3>
            <div className="flex w-full flex-col gap-4 rounded-2xl p-4 md:flex-row md:gap-8">
                <div className="glass-dark h-fit flex-1 rounded-2xl border-2 border-white p-4">
                    <ButtonToggle
                        button1={{
                            label: 'Ellipse',
                            handleClick: () => setShape('ellipse'),
                            isActive: gradient.shape === 'ellipse',
                        }}
                        button2={{
                            label: 'Circle',
                            handleClick: () => setShape('circle'),
                            isActive: gradient.shape === 'circle',
                        }}
                        label="Shape"
                    />
                    <div className="mt-4 flex flex-col gap-2 md:order-3">
                        <Slider
                            property="X"
                            value={gradient.position.x}
                            handleChange={setX}
                            type={'%'}
                        />
                        <Slider
                            property="Y"
                            value={gradient.position.y}
                            handleChange={setY}
                            type={'%'}
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <p className="mb-2 text-left font-bold">Noise Filter?</p>
                            <input
                                type="checkbox"
                                className="toggle checked:border-white checked:text-white"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setNoiseFilter({
                                            ...noiseFilter,
                                            visible: true,
                                        });
                                    } else {
                                        setNoiseFilter({
                                            ...noiseFilter,
                                            visible: false,
                                        });
                                    }
                                }}
                                style={{ backgroundColor: gradient.colours[0].hex }}
                            />
                        </div>
                        <div>
                            <div
                                className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out ${noiseFilter.visible ? 'max-h-90' : 'max-h-0'}`}
                            >
                                <ButtonToggle
                                    button1={{
                                        label: 'Turbulence',
                                        handleClick: () =>
                                            setNoiseFilter({ ...noiseFilter, type: 'turbulence' }),
                                        isActive: noiseFilter.type === 'turbulence',
                                    }}
                                    button2={{
                                        label: 'Fractal Noise',
                                        handleClick: () =>
                                            setNoiseFilter({
                                                ...noiseFilter,
                                                type: 'fractalNoise',
                                            }),
                                        isActive: noiseFilter.type === 'fractalNoise',
                                    }}
                                    label="Filter Type"
                                />
                                <Slider
                                    property="Base Frequency"
                                    value={noiseFilter.baseFrequency}
                                    handleChange={(value) =>
                                        setNoiseFilter({ ...noiseFilter, baseFrequency: value })
                                    }
                                    min={0.01}
                                    max={1}
                                    step={0.01}
                                />
                                <Slider
                                    property="Octaves"
                                    value={noiseFilter.numOctaves}
                                    handleChange={(value) =>
                                        setNoiseFilter({ ...noiseFilter, numOctaves: value })
                                    }
                                    min={1}
                                    max={5}
                                />
                                <Slider
                                    property="Seed"
                                    value={noiseFilter.seed}
                                    handleChange={(value) =>
                                        setNoiseFilter({ ...noiseFilter, seed: value })
                                    }
                                    min={0}
                                    max={10}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="glass-dark flex h-fit flex-1 flex-col gap-4 rounded-2xl border-2 border-white p-4">
                    {gradient.colours.map((colour, index) => (
                        <ColourBlock
                            key={index}
                            colour={colour.hex}
                            value={colour.pos}
                            index={index}
                        />
                    ))}
                    <div className="flex items-center justify-between gap-2">
                        <button className="btn glass-light flex-1" onClick={() => addColour()}>
                            Add Colour
                        </button>
                        <div className="tooltip" data-tip="Randomise Colours">
                            <button
                                className="btn glass-light w-fit text-white"
                                onClick={shuffleColours}
                            >
                                <Shuffle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
