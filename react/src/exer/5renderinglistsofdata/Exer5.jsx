import React from 'react';
import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function Exer5() {
    return (
    <ul className="todo-list">
        {DUMMY_TODOS.map((todo) =>{
            return <Todo text={todo}>  </Todo>})
            }
      </ul>
    );
}