console.log("Welcome to the main module")

import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

////////////////////////////////////////////////////////////////////////////////////////////////////

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
const newPlant = usePlants()
console.log(newPlant)

////////////////////////////////////////////////////////////////////////////////////////////////////