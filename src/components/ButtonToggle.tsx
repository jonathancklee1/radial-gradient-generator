interface ButtonToggles {
    label: string;
    handleClick: () => void;
    isActive?: boolean;
}
export default function ButtonToggle({
    button1,
    button2,
    label,
}: {
    button1: ButtonToggles;
    button2: ButtonToggles;
    label: string;
}) {
    return (
        <>
            <p className="mb-2 text-left font-bold">{label}</p>
            <div className="flex w-full gap-4">
                <button
                    className={`btn glass-light border-black/20 ${button1.isActive ? 'btn-active border-white text-white/90 inset-shadow-sm' : 'text-black/50 shadow-sm'} flex-1`}
                    onClick={() => {
                        button1.handleClick();
                    }}
                >
                    {button1.label}
                </button>
                <div className="divider divider-horizontal m-0"></div>
                <button
                    className={`btn glass-light border-black/20 ${button2.isActive ? 'btn-active border-white text-white/90 inset-shadow-sm' : 'text-black/50 shadow-sm'} flex-1`}
                    onClick={() => {
                        button2.handleClick();
                    }}
                >
                    {button2.label}
                </button>
            </div>
        </>
    );
}
