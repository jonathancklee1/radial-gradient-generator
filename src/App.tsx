import AppHeader from './components/AppHeader';
import Canvas from './components/Canvas';
import ControlsBlock from './components/ControlsBlock';

function App() {
  return (
    <div className="h-full min-h-screen bg-amber-500">
      <AppHeader />
      <main className="mx-auto flex max-w-360 flex-col gap-4 p-4">
        <Canvas />
        <ControlsBlock />
      </main>
    </div>
  );
}

export default App;
