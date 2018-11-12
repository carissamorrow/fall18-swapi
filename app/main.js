import CharactersController from "./components/characters/characters-controller.js";
import PlanetsController from "./components/planets/planets-controller.js";

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      planetsController: new PlanetsController()
    }
  }
}


// @ts-ignore
window.app = new App()


