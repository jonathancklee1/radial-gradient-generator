import AppHeader from './components/AppHeader';
import Canvas from './components/Canvas';
import { CodeEditor } from './components/CodeBlock';
import ControlsBlock from './components/ControlsBlock';
import { NoiseFilter } from './components/NoiseFilter';
import useGradientStore from './store/GradientStore';

function App() {
    const { getCssString, noiseFilter } = useGradientStore();
    return (
        <div className="h-full min-h-screen" style={{ background: getCssString() }}>
            <AppHeader />
            <main className="mx-auto flex max-w-360 flex-col gap-4 p-4">
                <Canvas />
                <CodeEditor />
                <ControlsBlock />
            </main>
            {noiseFilter.visible && <NoiseFilter />}
        </div>
    );
}

export default App;
