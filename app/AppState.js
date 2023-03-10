import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Background').Background} */
  // @ts-ignore
  background = null

  /** @type {import('./Models/Weather').Weather[]} */
  temps = []

  /** @type {import('./Models/Weather').Weather} */
  // @ts-ignore
  curTemp = null

  /** @type {import('./Models/Task').Task[]} */
  tasks = []
 
  /** @type {import('./Models/Quote').Quote} */
  // @ts-ignore
  quote = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
