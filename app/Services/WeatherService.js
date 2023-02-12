import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { Pop } from "../Utils/Pop.js"
import { sandboxApi, weatherApi } from "./axiosService.js"

class WeatherService{
    changeTemp() {
        let newTemp = appState.temps.find(e => e.type != appState.curTemp.type)
        // @ts-ignore
        appState.curTemp = newTemp
    }

    async retrieveWeather() {
        try {
            const res = await weatherApi.get()
            const weather = new Weather(res.data)


            let ftemp = new Weather({
                name: weather.name,
                description: weather.description,
                current: (Math.round((weather.current - 273.15) * 9/5 +32)).toString(),
                high: (Math.round((weather.high - 273.15) * 9/5 +32)).toString(),
                low: (Math.round((weather.low - 273.15) * 9/5 +32)).toString(),
            })
            let ctemp = new Weather({
                name: weather.name,
                description: weather.description,
                current: (weather.current - 273.15).toFixed(1),
                high: (weather.high - 273.15).toFixed(1),
                low: (weather.low - 273.15).toFixed(1),
                type: "C"
            })
            appState.temps.push(ctemp)
            appState.temps.push(ftemp)
            // @ts-ignore
            appState.curTemp = appState.temps.find(e => e.type == "F")

        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

}

export const weatherService = new WeatherService()