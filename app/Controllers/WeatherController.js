import { weatherService } from "../Services/WeatherService";
import { Pop } from "../Utils/Pop";


async function drawWeather(){
    try {
        await weatherService.drawWeather()
        
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

export class WeatherController{
    constructor() {
        
    }
}