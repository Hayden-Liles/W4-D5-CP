import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { Pop } from "../Utils/Pop.js"
import { todoApi } from "./axiosService.js"


class TasksServices{
    async deleteTask(taskId) {
        try {
            const res = await todoApi.delete(taskId)
            let taskToDelete = appState.tasks.findIndex(e => e.id == taskId)
            appState.tasks.splice(taskToDelete, 1)
            appState.emit('tasks')
        }
        catch (error) {
           console.error(error)
           Pop.error(error)
        }
    }

    async updateTask(taskId) {
        const taskToUpdate = appState.tasks.find(e => e.id == taskId)
        // @ts-ignore
        const res = await todoApi.put(taskId, { completed: !taskToUpdate.completed })
        // @ts-ignore
        taskToUpdate.completed = !taskToUpdate?.completed
        appState.emit('tasks')
    }

    async getTasks() {
        const res = await todoApi.get('')
        let tasks = res.data.map(e => new Task(e))
        appState.tasks = tasks
        
    }

    async createTask(formData) {
        const res = await todoApi.post('', formData)
        const newTask = new Task(res.data)
        
        appState.tasks.unshift(newTask)
        appState.emit('tasks')
    }

}

export const tasksServices = new TasksServices()