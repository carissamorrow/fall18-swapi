import StarshipsService from "./starships-service.js";

let _starshipsService = new StarshipsService()
function _draw() {

  let starshipsTemplate = ''
  let actionsTemplate = ''
  if (_starshipsService.prev) {
    actionsTemplate += `<button type="button" class="btn btn-lg" onclick="app.controllers.starshipsController.getStarships('${_starshipsService.prev}')">Prev</button>`
  }
  if (_starshipsService.next) {
    actionsTemplate += `<button type="button" class="btn btn-lg" onclick="app.controllers.starshipsController.getStarships('${_starshipsService.next}')">Next</button>`
  }
  _starshipsService.starships.forEach(starship => {
    starshipsTemplate += `<div class="starship">${starship.name}</div>`
  })
  console.log(starshipsTemplate)
  document.getElementById("category-title").innerText = ""
  document.getElementById("category-description").innerText = "The starships of star wars"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = starshipsTemplate

}

function drawNavButton() {
  document.getElementById("swapi-nav").innerHTML += `
  <button type="button" class="btn btn-lg" onclick="app.controllers.starshipsController.getStarships()">Starship</button>`
}

function _drawError(error) {

}

export default class StarshipsController {
  constructor() {
    // _starshipsService.getStarships(_draw, _drawError)
    drawNavButton()
  }

  getStarships(url) {
    _starshipsService.getStarships(_draw, _drawError, url)
  }
}

