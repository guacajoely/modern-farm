export const harvestPlants = (plantArray) => {

    const harvestedArray = []


    for (const plant of plantArray){

        if (plant.type === 'Corn'){
            for(let i=0; i < (plant.output / 2); i++){
                harvestedArray.push(plant)
            }
        }

        else{
            for(let i=0; i < plant.output; i++){
                harvestedArray.push(plant)
            }
        }
    }   

    return harvestedArray

}
