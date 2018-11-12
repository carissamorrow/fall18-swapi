import CharactersController from "./components/characters/characters-controller.js";
import PlanetsController from "./components/planets/planets-controller.js";

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController()
    }
  }
}


// @ts-ignore
window.app = new App()

console.log("The app is up and running")
