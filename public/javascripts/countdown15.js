const today = new Date()

const endDate = new Date('November 25, 2032')
const milliEachDay = 24 * 60 * 60 * 1000
const timeLeft = (endDate.getTime() - today.getTime())
const eDaysLeft = timeLeft / milliEachDay
let daysLeft = Math.floor(eDaysLeft)
let yearsLeft = 0
if (daysLeft > 365) {
  yearsLeft = Math.floor(daysLeft / 366)
  daysLeft = daysLeft % 366
}
const eHrsLeft = (eDaysLeft - daysLeft) * 24
const hrsLeft = Math.floor(eHrsLeft)
const minsLeft = Math.floor((eHrsLeft - hrsLeft) * 60)
console.log(yearsLeft + ' years ' + daysLeft + ' days ' + hrsLeft + ' hours ' + minsLeft + ' minutes')
