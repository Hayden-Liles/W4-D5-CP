// @ts-ignore
import { appState } from "../AppState.js"
import { tasksServices } from "../Services/TasksServices.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function drawTasks(){
    let template = ''
    appState.tasks.forEach(e => {
        template += e.taskTemplate
    })
    setHTML('tasks-container', template)
    setText('todo-count', appState.tasks.length)
}

async function getTasks(){
    try {
        await tasksServices.getTasks()
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

export class TasksController{
    constructor(){
        getTasks()
        appState.on('tasks', drawTasks)
    }

    async createTask(){
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

    async updateTask(taskId){
        console.log("TODO update Task", taskId)
    }

    async deleteTask(taskId){
        console.log("TODO delete Task", taskId)
    }
}