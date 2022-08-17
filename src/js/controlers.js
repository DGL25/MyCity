import { buildings } from "./main"
import {District} from "./city"

export default class Controlers{
    async createDistrict(){
        try {
            const result = await Promise.all([this.checkLevel(), this.checkMoney()])
            console.log(result)

            this.cityDistrict.push(new District())

            this.cityBank -= this.cityDistrictValue
            this.cityDistrictValue += 250000
        } catch (error) {
            console.log(error)
        }
    }

    async createBuildings(idDistrict = 0, category = 'houses', idBuilding = 0){
        try {
            const result = await Promise.all([this.checkMoney('buildings', category, idBuilding)])
            console.log(result)

            category === 'houses' ? this.cityDistrict[idDistrict].districtHouses.push(buildings[category][idBuilding]) : this.cityDistrict[idDistrict].districtEstablishment.push(buildings[category][idBuilding])

            this.cityPopulation += buildings[category][idBuilding].population
        } catch (error) {
            console.warn(error)
        }
    }

    async checkLevel(){
        if(this.cityLevel < this.cityRequireLevelDistrict){return Promise.reject('Não possue nível suficiente')}

        return `Possue nível sufuciente`
    }

    async checkMoney(t,c,i){
        switch (t) {
            case 'buildings':
                    if(this.cityBank < buildings[c][i].value){return Promise.reject(`Você não pode construir este(a) ${buildings[c][i].name}`)}

                    return `Você pode construir este(a) ${buildings[c][i].name}`
                break;
        
            default:
                if(this.cityBank < this.cityDistrictValue){return Promise.reject(`Não possue dinheiro suficiente, falta R$ ${this.cityDistrictValue - this.cityBank}`)}

                return 'Possue dinheiro suficiente para criar um novo bairro'
                break;
        }
    }
}