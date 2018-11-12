// @ts-ignore
let starshipssAPI = axios.create({
  baseURL: "https://swapi.co/api/starships/"
})

let _starships = []
let nextUrl = ""
let prevUrl = ""

export default class StarshipsService {
  constructor() {
    console.log("hello from Starships Service")
  }

  get starships() {
    return _starships
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getStarships(success, fail, url = "") {
    starshipsAPI.get(url)
      .then(res => {
        _starships = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        success()
      })
      .catch(error => {
        fail(error)
        console.log(error)
      })
  }

}