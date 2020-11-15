const axios = require('axios').default

const co2Options = {
  method: 'GET',
  url: 'https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api',
  headers: {
    'x-rapidapi-key': '27e986dab5mshabba555768a6362p16e15ejsn0353f0bcae49',
    'x-rapidapi-host': 'daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com'
  }
}

axios.request(co2Options).then(function (response) {
  console.log(response.data)
}).catch(function (error) {
  console.error(error)
})

const airQualityOptions = {
  method: 'GET',
  url: 'https://ambee-air-quality.p.rapidapi.com/latest/by-lat-lng',
  params: { lng: '78.96', lat: '20.59', limit: '10' },
  headers: {
    'x-rapidapi-key': '27e986dab5mshabba555768a6362p16e15ejsn0353f0bcae49',
    'x-rapidapi-host': 'ambee-air-quality.p.rapidapi.com'
  }
}

axios.request(airQualityOptions).then(function (response) {
  console.log(response.data)
}).catch(function (error) {
  console.error(error)
})
