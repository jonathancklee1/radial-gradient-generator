import useGradientStore from '../store/GradientStore';

export default function Canvas() {
    const { getCssString } = useGradientStore();
    return (
        <div
            className="mx-auto h-56 w-full overflow-hidden rounded-2xl border-2 border-white shadow-xl md:h-64"
            style={{ background: getCssString() }}
        >
            <div
                className="h-full w-full"
                style={{
                    filter: 'url(#noiseFilter)',
                }}
            ></div>
        </div>
    );
}
