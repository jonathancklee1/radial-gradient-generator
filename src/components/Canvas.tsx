import useGradientStore from "../store/GradientStore";

export default function Canvas() {
    const gradient = useGradientStore((state) => state.gradient);
    console.log(gradient);
    return (
        <div
            className="w-full h-72 bg-white mx-auto rounded-2xl border-8 border-black"
            style={{
                background: `radial-gradient(${gradient.shape} at ${gradient.position.x}% ${gradient.position.y}%, ${gradient.colours.map((colour) => `${colour.hex} ${colour.pos}%`).join(", ")})`,
            }}
        ></div>
    );
}
