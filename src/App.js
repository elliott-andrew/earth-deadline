import './App.css';
import countdown from 'countdown';

function App() {
  let timer = countdown( new Date(2028, 1, 2, countdown.SECONDS) );
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
          <p>{years > 9 ? years : "0" + years} : {months > 9 ? months : "0" + months} : {days > 9 ? days : "0" + days}</p>
          <p>{hours > 9 ? hours : "0" + hours} : {minutes > 9 ? minutes : "0" + minutes} : {seconds > 9 ? seconds : "0" + seconds}</p>
       </div>
      </div>
    </div>
  );
}

export default App;
