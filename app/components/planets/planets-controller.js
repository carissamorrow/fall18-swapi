import PlanetsService from "./planets-service.js";

let _planetsService = new PlanetsService()
function _draw() {

  let planetsTemplate = ''
  let actionsTemplate = ''
  if (_planetsService.prev) {
    actionsTemplate += `<button onclick="app.controllers.planetsController.getPlanets('${_planetsService.prev}')">Prev</button>`
  }
  if (_planetsService.next) {
    actionsTemplate += `<button onclick="app.controllers.planetsController.getPlanets('${_planetsService.next}')">Next</button>`
  }
  _planetsService.planets.forEach(planet => {
    planetsTemplate += `<div class="planets">${planet.name}</div>`
  })

  document.getElementById("category-title").innerText = "Planets"
  document.getElementById("category-description").innerText = "The planets of star wars"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = planetsTemplate

}

function _drawError(error) {

}

export default class PlanetsController {
  constructor() {
    _planetsService.getPlanets(_draw, _drawError)
  }

  getPlanets(url) {
    _planetsService.getPlanets(_draw, _drawError, url)
  }
}

