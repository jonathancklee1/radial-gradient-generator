import useGradientStore from '../store/GradientStore';

export default function ButtonToggle() {
    const { gradient, setShape } = useGradientStore();
    return (
        <>
            <p className="mb-2 text-left font-bold">Shape</p>
            <div className="flex w-full gap-4">
                <button
                    className={`btn glass-light border-black/20 ${gradient.shape === 'ellipse' ? 'btn-active border-white text-white/70 inset-shadow-sm' : 'text-black/50 shadow-sm'} flex-1`}
                    onClick={() => {
                        setShape('ellipse');
                    }}
                >
                    Ellipse
                </button>
                <div className="divider divider-horizontal m-0"></div>
                <button
                    className={`btn glass-light border-black/20 ${gradient.shape === 'circle' ? 'btn-active border-white text-white/70 inset-shadow-sm' : 'text-black/50 shadow-sm'} flex-1`}
                    onClick={() => {
                        setShape('circle');
                    }}
                >
                    Circle
                </button>
            </div>
        </>
    );
}
