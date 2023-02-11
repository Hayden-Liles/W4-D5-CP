import { appState } from "../AppState.js"
import { Background } from "../Models/Background.js"
import { Pop } from "../Utils/Pop.js"
import { sandboxApi } from "./axiosService.js"


class BackgroundsService{
  async drawBackground() {
    try {
      const res = await sandboxApi.get('/api/images')
      let background = new Background(res.data)
      appState.background = background
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
  
}

export const backgroundsService = new BackgroundsService()