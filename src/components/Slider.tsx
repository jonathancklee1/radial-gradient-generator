interface SliderProps {
    property?: string;
    value: number;
    handleChange: (value: number, index?: number) => void;
}

export default function Slider({ property, value, handleChange }: SliderProps) {
    const isHex = property?.startsWith('#');

    return (
        <div className="flex flex-col">
            <div className="flex content-center justify-between">
                {isHex ? (
                    <div className="cursor-pointer rounded-2xl border-2 border-black bg-gray-400 p-2 text-left font-bold">
                        {property?.toUpperCase()}
                    </div>
                ) : (
                    <span className="text-left font-bold">{property} Value</span>
                )}
                <label className="input text-base-content ml-auto w-17 gap-1 rounded-md font-bold">
                    <input
                        value={value}
                        min="0"
                        max="100"
                        onChange={(e) => {
                            handleChange(Number(e.target.value));
                        }}
                    />
                    <div className="">%</div>
                </label>
            </div>

            <input
                type="range"
                min={0}
                max="100"
                value={value}
                className="range mt-2 w-full [--range-bg:orange] [--range-fill:0] [--range-thumb:blue]"
                onChange={(e) => {
                    handleChange(Number(e.target.value));
                }}
            />
        </div>
    );
}
