import CharactersController from "./components/characters/characters-controller.js";
import PlanetsController from "./components/planets/planets-controller.js";
import StarshipsController from "./components/starships/starships-controller.js";

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      planetsController: new PlanetsController(),
      starshipsController: new StarshipsController()
    }
  }
}


// @ts-ignore
window.app = new App()


//