import { appState } from "../AppState.js"
import { Background } from "../Models/Background.js"
import { sandboxApi } from "./axiosService.js"


class BackgroundsService{
  async drawBackground() {
    const res = await sandboxApi.get('/api/images')
    let background = new Background(res.data)
    appState.background = background
  }
  
}

export const backgroundsService = new BackgroundsService()