const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const selectRandomArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const generateNNumberArray = (size) => {
  let array = []
  for (i = 0; i < size; i++) {
    array.push(i)
  }
  return array
}

let simNumber = 1000
let wins = 0
let keep = true
let numberOfDoors = 2
let doors = generateNNumberArray(numberOfDoors)

for (let i = 0; i < simNumber; i++) {
  let options = doors;
  let prizePosition = getRandomInt(0, (numberOfDoors - 1));
  let playerPick = getRandomInt(0, (numberOfDoors - 1));
  let showOptions = doors.filter(door => (door !== prizePosition && door !== playerPick))
  let showed = selectRandomArray(showOptions)
  options = options.filter(option => option !== showed)
  console.log(`sim no ${i}`)
  console.log(`prize position ${prizePosition}`)
  console.log(`player pick ${playerPick}`)
  console.log(`show options ${showOptions}`)
  console.log(`showed door ${showed}`)
  console.log(`options door ${options}`)
  if (!keep) {
    playerPick = options.filter(option => option !== playerPick)[0]
    console.log(`changing pick`)
    console.log(`player pick ${playerPick}`)
  }
  if (playerPick === prizePosition) {
    wins += 1
  }
  console.log(`-----break-----`)
}

console.log(`wins: ${wins}/${simNumber}`)

