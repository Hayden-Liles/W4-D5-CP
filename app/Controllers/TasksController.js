// @ts-ignore
import { appState } from "../AppState.js"
import { todoApi } from "../Services/axiosService.js"
import { tasksServices } from "../Services/TasksServices.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function drawTasks() {
    let template = ''
    appState.tasks.forEach(e => {
        template += e.taskTemplate
    })
    setHTML('tasks-container', template)
    let count = 0
    appState.tasks.forEach(e => {
        if(e.completed == false){
            count++
        }
    })
    setText('todo-count', count)
}

async function getTasks() {
    try {
        await tasksServices.getTasks()
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

export class TasksController {
    constructor() {
        getTasks()
        appState.on('tasks', drawTasks)
    }

    async createTask() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            // @ts-ignore
            form.reset()
            await tasksServices.createTask(formData)

        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async updateTask(taskId) {
        try {
            await tasksServices.updateTask(taskId)
        }
        catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async deleteTask(taskId) {
        try {
            if(await Pop.confirm()){
                await tasksServices.deleteTask(taskId)
            }
        }
        catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}