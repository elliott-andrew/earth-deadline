// Set the date we're counting down to
const countDownDate = new Date("Nov 25, 2032 09:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  if (days > 365) {
  const yearsLeft = Math.floor(days / 365)
  days = days % 365
  }
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(distance % 1000);  
  // Output the result in an element with id="demo"
  console.log(days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + milliseconds + "m");
    
  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);