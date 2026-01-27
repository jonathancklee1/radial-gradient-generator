import useGradientStore from '../store/GradientStore';

export default function Canvas() {
  const gradient = useGradientStore((state) => state.gradient);
  console.log(gradient);
  return (
    <div
      className="mx-auto h-72 w-full rounded-2xl border-8 border-black bg-white"
      style={{
        background: `radial-gradient(${gradient.shape} at ${gradient.position.x}% ${gradient.position.y}%, ${gradient.colours.map((colour) => `${colour.hex} ${colour.pos}%`).join(', ')})`,
      }}
    ></div>
  );
}
