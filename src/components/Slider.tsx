import useGradientStore from '../store/GradientStore';

interface SliderProps {
    property?: string;
    value: number;
    handleChange: (value: number, index?: number) => void;
    onChangePicker?: () => void;
    min?: number;
    max?: number;
    step?: number;
    type?: string;
}

export default function Slider({
    property,
    value,
    handleChange,
    onChangePicker,
    min = 0,
    max = 100,
    step = 1,
    type,
}: SliderProps) {
    const isHex = property?.startsWith('#');
    const { gradient } = useGradientStore();
    return (
        <div className="relative flex flex-col">
            <div className="flex content-center justify-between">
                {isHex ? (
                    <button
                        className="btn glass-dark -translate-x-10 cursor-pointer rounded-2xl border-2 border-white p-2 text-left font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        onClick={onChangePicker}
                    >
                        {property?.toUpperCase()}
                    </button>
                ) : (
                    <span className="text-left font-bold">{property} Value</span>
                )}
                <label
                    className={`input text-base-content ml-auto gap-1 rounded-md font-bold ${isHex ? 'translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100' : ''} ${type ? 'w-21' : 'w-19'}`}
                >
                    <input
                        value={value}
                        type="number"
                        min={min}
                        max={max}
                        onChange={(e) => {
                            handleChange(Number(e.target.value));
                        }}
                        step={step}
                    />
                    <div className="">{type}</div>
                </label>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                value={value}
                step={step}
                className="range mt-2 w-full [--range-bg:rgba(255,255,255,0.7)] [--range-fill:0]"
                style={
                    {
                        ['--range-thumb']: gradient.colours[0]?.hex || '#ffffff',
                    } as React.CSSProperties
                }
                onChange={(e) => {
                    handleChange(Number(e.target.value));
                }}
            />
        </div>
    );
}
