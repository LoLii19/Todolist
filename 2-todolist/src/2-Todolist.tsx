import React from 'react';
import {FilterValuesType} from "./App";

type TodolistNewPropsType = {
    title: string
    tasks: Array<Tasktype>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}
export type Tasktype ={
    id: number
    title: string
    isDone: boolean
}


const TodolistNew = (props: TodolistNewPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return <li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={ () => { props.removeTask (t.id) } }>x</button>
                        </li>
                    } )
                }
            </ul>
            <div>
                <button onClick={ () => {props.changeFilter("all")} }>All</button>
                <button onClick={ () => {props.changeFilter("active")}}>Active</button>
                <button onClick={ () => {props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    );
};

export default TodolistNew;