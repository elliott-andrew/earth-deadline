/* eslint-disable no-undef */
// Set the date we're counting down to
const countDownDate = new Date('Nov 25, 2032 09:00:00').getTime()

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime()
  // Find the distance between now and the count down date
  const distance = countDownDate - now
  // Time calculations for days, hours, minutes and seconds
  let yearsLeft
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  if (days > 365) {
    yearsLeft = Math.floor(days / 365)
    days = days % 365
  }
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  const milliseconds = Math.floor(distance % 1000)
  // Output the result in an element with id
  document.getElementById('years').innerHTML = yearsLeft
  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('minutes').innerHTML = minutes
  document.getElementById('seconds').innerHTML = seconds
  document.getElementById('milliseconds').innerHTML = milliseconds
  // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1)

x()
