import { BackgroundsController } from "./Controllers/BackgroundController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController()
  weatherController = new WeatherController()
  tasksController = new TasksController()
}

window["app"] = new App();
