import { appState } from "../AppState.js";
import { Background } from "../Models/Background.js";
import { backgroundsService } from "../Services/BackgroundsService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

async function drawBackground(){
  try {
    await backgroundsService.drawBackground()
    document.body.style.backgroundImage = `url(${appState.background.url})`
    setText('background-author', appState.background.author)
  }
  catch(error) {
    console.error(error)
    Pop.error(error)
  }
}

export class BackgroundsController{

  constructor(){
    drawBackground()
  }
}