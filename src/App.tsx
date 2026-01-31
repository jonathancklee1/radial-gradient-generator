import AppHeader from './components/AppHeader';
import Canvas from './components/Canvas';
import { CodeEditor } from './components/CodeBlock';
import ControlsBlock from './components/ControlsBlock';
import useGradientStore from './store/GradientStore';

function App() {
    const gradient = useGradientStore();
    return (
        <div className="h-full min-h-screen" style={{ background: gradient.getCssString() }}>
            <AppHeader />
            <main className="mx-auto flex max-w-360 flex-col gap-4 p-4">
                <Canvas />
                <CodeEditor />
                <ControlsBlock />
            </main>
        </div>
    );
}

export default App;
