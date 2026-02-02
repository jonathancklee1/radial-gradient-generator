import { Sketch } from '@uiw/react-color';
import { useEffect, useRef, type RefObject } from 'react';
import useGradientStore from '../store/GradientStore';

export function ColourPicker({
    colour,
    onClose,
    index,
    buttonRef,
}: {
    colour: string;
    onClose: () => void;
    index?: number;
    buttonRef?: RefObject<HTMLButtonElement | null>;
}) {
    const { changeColourHex } = useGradientStore();
    const pickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            console.log(event.target, buttonRef?.current);
            if (
                pickerRef.current &&
                !pickerRef.current.contains(event.target as Node) &&
                !buttonRef?.current?.contains(event.target as Node)
            ) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose, buttonRef]);

    return (
        <div ref={pickerRef} className="z-50">
            <Sketch
                style={{ marginLeft: 20 }}
                color={colour}
                onChange={(color) => {
                    console.log(index);
                    if (index !== undefined) changeColourHex(color.hex, index);
                }}
            />
        </div>
    );
}
