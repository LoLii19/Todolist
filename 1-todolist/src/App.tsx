import React from 'react';
import './App.css';
import TodolistNew from "./TodolistNew";
import {Tasktype} from "./TodolistNew";

function App() {
    const todolist_1 = "What to learn"
    const todolist_2 = "What to buy"
    let tasks_1: Array<Tasktype> = [
        {id: 1, title: "HTML &CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    const tasks_2: Array<Tasktype> = [
        {id: 4, title: "Ice-cream", isDone: true},
        {id: 5, title: "Fruits", isDone: false},
        {id: 6, title: "Milk", isDone: true},
    ]

    return (
        <div className="App">
           <TodolistNew tasks={tasks_1} title={todolist_1}  />
           <TodolistNew  tasks={tasks_2} title={todolist_2} />
        </div>
    );
}

export default App;
