import Controlers from "./controlers"

export default class City extends Controlers{
  constructor (name = 'Ibira City'){
    super()
    this.cityName = name,
    this.cityLevel = 5,
    this.cityLevelUp = 250000,      
    this.cityBank = this.cityName === 'Ibira City' ? 500000 : 100000,
    this.cityDistrict = [],
    this.cityDistrictValue = 250000      
    this.cityRequireLevelDistrict = 5,
    this.cityPopulation = 0
  }
}
  
export class District{
  constructor(name = 'São Cristóvão'){
    this.districtName = name
    this.districtEstablishment = [],
    this.districtHouses = [],
    this.districtLevel = 1,
    this.districtLevelUp = 100000
  }
}