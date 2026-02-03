import useGradientStore from '../store/GradientStore';

export function NoiseFilter() {
    const { noiseFilter } = useGradientStore();
    return (
        <svg style={{ display: 'none' }}>
            <filter id="noiseFilter" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                    type={noiseFilter?.type || 'turbulence'}
                    baseFrequency={noiseFilter?.baseFrequency || 0.5}
                    numOctaves={noiseFilter?.numOctaves || 2}
                    result="turbulence"
                />
            </filter>
        </svg>
    );
}
