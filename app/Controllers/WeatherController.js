import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


async function retrieveWeather(){
    try {
        await weatherService.retrieveWeather()
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

function drawWeather(){
    setHTML('temp-container', appState.curTemp.weatherTemplate)
}

export class WeatherController{
    constructor() {
        retrieveWeather()
        appState.on('curTemp', drawWeather)
    }

    changeTemp(){
        weatherService.changeTemp()
    }

}