import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{

  ngOnInit(): void {
      let savedTodoLists = localStorage.getItem("allTaskStore");
      this.allTasks = savedTodoLists?JSON.parse(savedTodoLists):[];
  }

  taskTitle: string = "";
  taskDate: Date = new Date();

  allTasks: Task[]= [];

  createTask(){
    let task: Task = {

      id: this.getRandomTaskId(),
      title: this.taskTitle,
      date: this.taskDate
    };

    this.allTasks.push(task);

    localStorage.setItem("allTaskStore", JSON.stringify(this.allTasks));

    console.log(this.allTasks);
    this.taskTitle = "";
    this.taskDate= new Date();

  }

  deleteTask(index: number){
    this.allTasks.splice(index, 1);
    localStorage.setItem("allTaskStore", JSON.stringify(this.allTasks));
  }

  getRandomTaskId():string{

    const characterSet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for(let i=0; i<5; i++){
      result = result + characterSet.charAt(Math.floor(Math.random() + characterSet.length));
    }

    return result;
  }

}


interface Task{
  id: string,
  title: string,
  date: Date,
}

