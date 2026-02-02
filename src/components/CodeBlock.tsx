import { useState } from 'react';
import useGradientStore from '../store/GradientStore';

export function CodeEditor() {
    const gradient = useGradientStore();
    const css = gradient.getCssString() ?? '';
    const [isCopied, setIsCopied] = useState(false);
    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(css);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (
        <div className="mockup-code glass-dark group relative w-full overflow-hidden bg-indigo-800/80 shadow-lg">
            <div className="p-2">
                <pre data-prefix=">" className="flex items-start">
                    <code className="flex-1 font-mono wrap-break-word whitespace-pre-wrap">
                        {css}
                    </code>
                </pre>
            </div>
            <button
                className="glass-dark btn btn-outline absolute top-2 right-2 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:text-indigo-300"
                onClick={copyText}
            >
                {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </button>
        </div>
    );
}
