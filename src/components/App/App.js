import './App.css'
import OverlayController from '../../lib/OverlayController'
import Track from '../Track'
import Resize from '../Resize'

function App() {
  return (
    <div className="App">
      <OverlayController />
      <Track />
      <Resize />
    </div>
  );
}

export default App;
