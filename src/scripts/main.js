console.log("Welcome to the main module")

import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

////////////////////////////////////////////////////////////////////////////////////////////////////
//TEST createAsparagus function 

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Create a seed object.
// 2. Invoke addPlant() and specify the seed object as the argument.
// 3. Invoke usePlants() and store its return value in a variable.
// 4. Use console.log() to make sure your seed object got added to the array of plants in the field.
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
addPlant(asparagusSeed)


////////////////////////////////////////////////////////////////////////////////////////////////////

// In the main.js module, invoke the function that plants all of the seeds, 
//and then get the plants array from the fields.js module. 
//Then use console.log() to see if the plants array has been populated correctly.

import { plantSeeds } from "./tractor.js"

plantSeeds(yearlyPlan)

const fieldArray = usePlants()
console.log(fieldArray)


////////////////////////////////////////////////////////////////////////////////////////////////////
// In the main.js module, get the array of plants from the field module, 
// and then harvest them by invoking the appropriate function that you defined above. 
// Make sure you specify the array of plants as an argument to the harvesting function.
// Then use console.log() to see your new array of harvested food to sell.


import { harvestPlants } from "./harvester.js"

const harvestedField = harvestPlants(fieldArray)

console.log(harvestedField)



