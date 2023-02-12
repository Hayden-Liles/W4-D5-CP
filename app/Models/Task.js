import { generateId } from "../Utils/generateId.js";


export class Task{
    constructor(data){
        this.id = data.id || generateId()
        this.description = data.description
        this.completed = false
    }

    get taskTemplate(){
        return`
        <div class="d-flex align-items-center my-bg-grad mb-2 justify-content-between">
            <div class="d-flex align-items-center">
                <input type="checkbox" class="ms-1 fs-3 checkbox-size" ${this.completed ? "checked" : ""} onchange="app.tasksController.updateTask('${this.id}')">
                <p class="fs-5 p-2">${this.description}</p>
            </div>
            <i class="mdi mdi-trash-can pe-2 btn" onclick="app.tasksController.deleteTask('${this.id}')"></i>
        </div>
        `
    }
}