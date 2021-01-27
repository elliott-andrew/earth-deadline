import './App.css';
import countdown from 'countdown';

function App() {
  let timer = countdown( new Date(2025, 9, 25, countdown.SECONDS) );
  console.log(timer)
  let years = timer.years
  let months = timer.months
  let days = timer.days
  let hours = timer.hours
  let minutes = timer.minutes
  let seconds = timer.seconds

  return (
    <div className="App">
      <div id="earth">
      <h1>Earth<br/>Deadline</h1>
      <div id="countdown">
          <p>{years > 10 ? years : "0" + years} : {months > 10 ? months : "0" + months} : {days > 10 ? days : "0" + days}</p>
          <p>{hours > 10 ? hours : "0" + hours} : {minutes > 10 ? minutes : "0" + minutes} : {seconds > 10 ? seconds : "0" + seconds}</p>
       </div>
      </div>
    </div>
  );
}

export default App;
