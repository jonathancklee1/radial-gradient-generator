import useGradientStore from "../store/GradientStore";

export default function ButtonToggle() {
    const { gradient, setShape } = useGradientStore();
    return (
        <>
            <p className="text-left font-bold">Shape</p>
            <div className="flex gap-4 w-full">
                <button
                    className={`btn btn-soft btn-primary ${gradient.shape === "ellipse" ? "btn-active" : null} flex-1`}
                    onClick={() => {
                        setShape("ellipse");
                    }}
                >
                    Ellipse
                </button>
                <div className="divider divider-horizontal m-0"></div>
                <button
                    className={`btn btn-soft btn-secondary ${gradient.shape === "circle" ? "btn-active" : null} flex-1`}
                    onClick={() => {
                        setShape("circle");
                    }}
                >
                    Circle
                </button>
            </div>
        </>
    );
}
