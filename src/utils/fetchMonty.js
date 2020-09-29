const apiUrl = 'http://localhost:2077/monty'

async function fetchMontySimulation(baseUrl, sampleSize, keep, numberOfDoors) {
  try {
    const requestUrl = baseUrl + `/?sampleSize=${sampleSize}&keep=${keep}&numberOfDoors=${numberOfDoors}`
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
  } catch(error) {
    console.error(error)
  }

}


export const fetchMonty = (sampleSize, keep, numberOfDoors) => fetchMontySimulation(apiUrl, sampleSize, keep, numberOfDoors);
