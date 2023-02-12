import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { Pop } from "../Utils/Pop.js"
import { quoteApi } from "./axiosService.js"


class QuotesServices{
    async getQuote() {
        try {
            const res = await quoteApi.get('')
            const newQuote = new Quote(res.data)
            appState.quote = newQuote
        }
        catch (error) {
           console.error(error)
           Pop.error(error)
        }
    }

}

export const quotesServices = new QuotesServices()