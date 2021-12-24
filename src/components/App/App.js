import './App.css'
import OverlayController from '../../lib/OverlayController'
import PlayerActionList from '../PlayerActionList'
import Resize from '../Resize'

function App() {
  return (
    <div className="App">
      <OverlayController />
      <PlayerActionList />
      <Resize />
    </div>
  );
}

export default App;
