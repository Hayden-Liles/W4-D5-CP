import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteApi } from "../Services/axiosService.js";
import { quotesServices } from "../Services/QuotesServices.js";
import { setText } from "../Utils/Writer.js";


async function getQuote(){
    await quotesServices.getQuote()
    const quote = appState.quote
    setText('quote-text', quote.content)
    setText('author-text', `~${quote.author}`)
}

export class QuotesController{
    constructor(){
        getQuote()
    }
}