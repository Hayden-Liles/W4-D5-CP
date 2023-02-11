import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


async function drawWeather(){
    try {
        await weatherService.drawWeather()
        console.log(appState.temps)
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

export class WeatherController{
    constructor() {
        drawWeather()
    }
}