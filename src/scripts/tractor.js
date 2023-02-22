import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plantingPlan) => {

    for (const row of plantingPlan){
        for (const seed of row){

            if (seed === 'Asparagus'){
                const newSeed = createAsparagus()
                addPlant(newSeed)
            }

            else if (seed === 'Corn'){
                const newSeed = createCorn()
                addPlant(newSeed)
            }

            else if (seed === 'Potato'){
                const newSeed = createPotato()
                addPlant(newSeed)
            }

            else if (seed === 'Soybean'){
                const newSeed = createSoybean()
                addPlant(newSeed)
            }

            else if (seed === 'Sunflower'){
                const newSeed = createSunflower()
                addPlant(newSeed)
            }

            else if (seed === 'Wheat'){
                const newSeed = createWheat()
                addPlant(newSeed)
            }
        }
    }

}
