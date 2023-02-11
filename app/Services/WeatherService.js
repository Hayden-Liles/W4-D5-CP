import { Pop } from "../Utils/Pop"


class WeatherService{
    drawWeather() {
        try {
            console.log('hi')
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
    
}

export const weatherService = new WeatherService()