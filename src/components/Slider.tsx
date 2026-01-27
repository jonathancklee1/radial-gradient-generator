interface SliderProps {
    property?: string;
    value: number;
    handleChange: (value: number, index?: number) => void;
}

export default function Slider({ property, value, handleChange }: SliderProps) {
    return (
        <div className="flex flex-col">
            {property && (
                <label className="text-left font-bold">{property} Value</label>
            )}
            <input
                type="range"
                min={0}
                max="100"
                value={value}
                className="range  [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
                onChange={(e) => {
                    handleChange(Number(e.target.value));
                }}
            />
        </div>
    );
}
