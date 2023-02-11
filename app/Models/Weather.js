

export class Weather{
    constructor(data){
        this.name = data.name
        this.high = data.main ? data.main.temp_max : data.high
        this.low = data.main ? data.main.temp_min : data.low
        this.current = data.main ? data.main.temp : data.current
        this.description = data.main ? data.weather[0].description : data.description
    }
}