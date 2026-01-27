interface SliderProps {
  property?: string;
  value: number;
  handleChange: (value: number, index?: number) => void;
}

export default function Slider({ property, value, handleChange }: SliderProps) {
  return (
    <div className="flex flex-col">
      <div className="flex content-center justify-between">
        {property && <span className="text-left font-bold">{property} Value</span>}
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
        className="range w-full [--range-bg:orange] [--range-fill:0] [--range-thumb:blue]"
        onChange={(e) => {
          handleChange(Number(e.target.value));
        }}
      />
    </div>
  );
}
