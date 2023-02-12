import { appState } from "../AppState.js";
import { Background } from "../Models/Background.js";
import { backgroundsService } from "../Services/BackgroundsService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

async function drawBackground(){
  try {
    await backgroundsService.drawBackground()
    document.body.style.backgroundImage = `url(${appState.background.url})`
    setText('background-author', `Image by: ${appState.background.author}`)
  }
  catch(error) {
    console.error(error)
    Pop.error(error)
  }
}

function drawTime(){
  const time = new Date()
  const timeStr = time.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  setText('time-text', timeStr)
}

export class BackgroundsController{

  constructor(){
    drawBackground()
    drawTime()
    setInterval(() => {
        drawTime()
    }, 1000);
  }
}