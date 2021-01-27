import './App.css';
import CarbonCountdown from './components/CarbonCountdown';

function App() {
  return (
    <div className="App">
      <div id="earth">
      <h1>Earth<br/>Deadline</h1>
      <CarbonCountdown />
      </div>
    </div>
  );
}

export default App;
