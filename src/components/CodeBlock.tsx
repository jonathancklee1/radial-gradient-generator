import useGradientStore from '../store/GradientStore';

export function CodeEditor() {
    const gradient = useGradientStore();
    const css = gradient.getCssString() ?? '';
    const lines = css.split('\n');

    return (
        <div className="mockup-code glassmorphism w-full bg-indigo-800/70">
            <div className="p-2">
                {lines.map((line, i) => (
                    <pre data-prefix=">" key={i} className="flex items-start">
                        <code className="flex-1 font-mono wrap-break-word whitespace-pre-wrap">
                            {line}
                        </code>
                    </pre>
                ))}
            </div>
        </div>
    );
}
