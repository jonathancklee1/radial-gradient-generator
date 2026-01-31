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
        <div className="mockup-code glassmorphism relative w-full bg-indigo-800/80">
            <div className="p-2">
                <pre data-prefix=">" className="flex items-start">
                    <code className="flex-1 font-mono wrap-break-word whitespace-pre-wrap">
                        {css}
                    </code>
                </pre>
            </div>
            <button
                className="glassmorphism btn btn-outline absolute top-2 right-2 hover:text-indigo-600"
                onClick={copyText}
            >
                {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </button>
        </div>
    );
}
