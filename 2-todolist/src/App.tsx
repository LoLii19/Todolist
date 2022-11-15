import React, {useState} from 'react';
import './App.css';
import TodolistNew, {Tasktype} from "./2-Todolist";

// function useState2(data:any){
//   return [data, () => {}];
// }
// let arr = useState2([{}, {}, {}])
// let tasks = arr[0];
// let setTasks = arr[1];

export type FilterValuesType = "all" | "completed" | "active"

function App() {
  const todolist_1 = "What to learn"
  // const todolist_2 = "What to buy"
  let tasks_1: Array<Tasktype> = [
    {id: 1, title: "HTML &CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: true},
  ]

  // const tasks_2: Array<Tasktype> = [
  //     {id: 5, title: "Ice-cream", isDone: true},
  //     {id: 6, title: "Fruits", isDone: false},
  // ]

  // let arr = useState(tasks_1);
  // let tasks =arr[0];
  // let setTasks =arr[1];
  let [tasks,setTasks] = useState(tasks_1)
  let [filter,setFilter] =useState<FilterValuesType>("all")

  function removeTask(id: number) {
    let filteredTasks = tasks.filter( t => t.id !== id)
setTasks(filteredTasks);
  }
  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter(t => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter(t => t.isDone === false);
  }


  return (
      <div className="App">
        <TodolistNew tasks={tasksForTodolist} title={todolist_1} removeTask={removeTask} changeFilter={changeFilter} />
        {/*<TodolistNew  tasks={tasks_2} title={todolist_2}/>*/}
      </div>
  );
}

export default App;