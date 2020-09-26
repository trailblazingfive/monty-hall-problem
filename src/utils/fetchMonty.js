const apiUrl = 'http://localhost:2077/monty'

async function fetchMontySimulation(baseUrl, sampleSize, keep, numberOfDoors) {
  const requestUrl = baseUrl + `/?sampleSize=${sampleSize}&keep=${keep}&numberOfDoors=${numberOfDoors}`
  // const requestUrl = "http://localhost:2077/monty/?sampleSize=100000&keep=true&numberOfDoors=3"
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}


export const fetchMonty = (sampleSize, keep, numberOfDoors) => fetchMontySimulation(apiUrl, sampleSize, keep, numberOfDoors);
