let balgruufHealth = 100

//Value Type conversion
//balgruufHealth = balgruufHealth.toString()

//console.log(typeof balgruufHealth)

let theVictorIs = `Ulfric is the winner.`

let newVictor = theVictorIs.replace('Ulfric',`General Tullius`)
//console.log(newVictor)

let newVictorLower = newVictor.toLowerCase()
let newVictorSplit = newVictor.split(` `)
let newVictorskewered = newVictorSplit.join(`--`)

//console.log(newVictorLower)
//console.log(newVictorSplit)
//console.log(newVictorskewered)

let alduinHealth = 1000

function isAlduinAlive(){
  if(alduinHealth > 0) {
    console.log(`Alduin, the world eater, lives.`)
    console.log(`Alduin's health is at ${alduinHealth} points.`)
    } else {
  console.log(`Alduin, the world eater, has been defeated.`)
}
}

//isAlduinAlive()

function theDragonbornComes(attack) {
  alduinHealth -= attack
  isAlduinAlive()
}

// theDragonbornComes(30)
// theDragonbornComes(500)
// theDragonbornComes(300)
// theDragonbornComes(170)

const greeting = function(person1, person2) {
  console.log(`${person1} and ${person2} get into a brawl at the Bannered Mare`)
}

// greeting(`Ysolda`,`Mikael`)

const brawl = (person1, person2) => {
console.log(`${person1} beat ${person2} with a chair in Jorrvaskr.`)
}

// brawl(`Aela`,`Vignar`)

function rollDice() {
  let possibleRolls = [1, 2, 3, 4, 5, 6]
  let randomNumber = Math.floor(Math.random() * possibleRolls.length)
  return possibleRolls[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

// console.log(firstRoll)
// console.log(secondRoll)

function diceMultiplier() {
  let firstRoll = rollDice()
  let secondRoll = rollDice()
  
  return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()

// console.log(multipliedNumber)

function rollThreeDice() {
  let firstRoll = rollDice()
  let secondRoll = rollDice()
  let thirdRoll = rollDice()

  return[firstRoll, secondRoll, thirdRoll]
}

let rollArray = rollThreeDice()

console.log(rollArray)