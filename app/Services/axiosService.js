

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 2500,
})  

// @ts-ignore
export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 2500,
})

// @ts-ignore
export const todoApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Hayden/todos',
    timeout: 2500,
  })