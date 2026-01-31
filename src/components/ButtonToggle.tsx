import useGradientStore from '../store/GradientStore';

export default function ButtonToggle() {
    const { gradient, setShape } = useGradientStore();
    return (
        <>
            <p className="mb-2 text-left font-bold">Shape</p>
            <div className="flex w-full gap-4">
                <button
                    className={`btn glassmorphism border-black/20 text-black/70 ${gradient.shape === 'ellipse' ? 'btn-active inset-shadow-sm' : 'border-gray-100 text-gray-400 shadow-sm'} flex-1`}
                    onClick={() => {
                        setShape('ellipse');
                    }}
                >
                    Ellipse
                </button>
                <div className="divider divider-horizontal m-0"></div>
                <button
                    className={`btn glassmorphism border-black/20 text-black/70 ${gradient.shape === 'circle' ? 'btn-active inset-shadow-sm' : 'border-gray-100 text-gray-400 shadow-sm'} flex-1`}
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
