import useGradientStore from "../store/GradientStore";

export default function Canvas() {
    const gradient = useGradientStore((state) => state.gradient);
    return (
        <div
            className="w-full h-72 bg-white mx-auto rounded-2xl"
            style={{
                background: `radial-gradient(circle at ${gradient.position.x}% ${gradient.position.y}%, ${gradient.colors.join(", ")})`,
            }}
        ></div>
    );
}
