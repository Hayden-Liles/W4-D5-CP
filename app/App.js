import { BackgroundsController } from "./Controllers/BackgroundController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  backgroundsController = new BackgroundsController()
}

window["app"] = new App();
