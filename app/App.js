import { BackgroundsController } from "./Controllers/BackgroundController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController()
  weatherController = new WeatherController()
  tasksController = new TasksController()
  quotesController = new QuotesController()
}

window["app"] = new App();
