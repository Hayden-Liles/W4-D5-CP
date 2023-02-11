import { BackgroundsController } from "./Controllers/BackgroundController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController()
  weatherController = new WeatherController()
}

window["app"] = new App();
