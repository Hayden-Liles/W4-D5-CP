

export class Weather{



    constructor(data){
        this.name = data.name
        this.high = data.main ? data.main.temp_max : data.high
        this.low = data.main ? data.main.temp_min : data.low
        this.current = data.main ? data.main.temp : data.current
        this.description = data.main ? data.weather[0].description : data.description
        this.type = data.type ?  data.type : "F"
    }


    get weatherTemplate(){
        return`
        <div class="px-3 py-1" onclick="app.weatherController.changeTemp()">
            <p class="fs-3 fw-bold">${this.current}°${this.type}</p>
            <p class="pb-2" id="temp-high-low">${this.high}°/${this.low}°</p>
            <p id="temp-high-low">${this.description}</p>
            <p id="temp-loc">${this.name}</p>
        </div>
        `
    }
}