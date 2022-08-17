import City from "./city";

import 'core-js'
import 'regenerator-runtime/runtime'

export const buildings = {
    houses: [
        {/*House*/
            name: 'Casa',
            type: 'house',
            value: 50000,
            population: 5,
            level: 1
        },
        {/** Apartament */
            name: 'Apartamento',
            type: 'apartament',
            value: 150000,
            population: 50,
            level: 1
        }
    ],
    establishment: [

    ]
}

let city = new City()

city.createDistrict()

city.createBuildings()
city.createBuildings(0, 'houses', 1)

console.log(city)