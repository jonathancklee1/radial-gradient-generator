import useGradientStore from '../store/GradientStore';

export default function Canvas() {
    const gradient = useGradientStore();
    console.log(gradient);
    return (
        <div
            className="mx-auto h-72 w-full rounded-2xl border-2 border-white bg-white shadow-xl"
            style={{
                background: gradient.getCssString(),
            }}
        ></div>
    );
}
