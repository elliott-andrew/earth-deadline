const axios = require('axios').default

const options = {
  method: 'GET',
  url: 'https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api',
  headers: {
    'x-rapidapi-key': '27e986dab5mshabba555768a6362p16e15ejsn0353f0bcae49',
    'x-rapidapi-host': 'daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com'
  }
}

axios.request(options).then(function (response) {
  console.log(response.data)
}).catch(function (error) {
  console.error(error)
})
