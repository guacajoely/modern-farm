export const Catalog = (harvestedArray) => {

    let HTMLString = ''

    for (const food of harvestedArray){
        HTMLString += `<section class="plant">${food.type}</section>`
    }

    return HTMLString

}