import AppHeader from "./components/AppHeader";
import Canvas from "./components/Canvas";
import ControlsBlock from "./components/ControlsBlock";

function App() {
    return (
        <div className="h-full bg-amber-500 min-h-screen">
            <AppHeader />
            <main className="max-w-360 mx-auto flex flex-col gap-4 p-4">
                <Canvas />
                <ControlsBlock />
            </main>
        </div>
    );
}

export default App;
