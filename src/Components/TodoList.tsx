// add a todo 
// strikethrough a todo
// re-add a todo on clicking on it

import React, { useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoText, setTodoText] = useState<string>('');

    const handleTodoAddClick = (): void => {
        if (todoText !== '') {
            const newTodo: Todo = {
                id: Date.now(),
                text: todoText,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setTodoText('');
        }
    };

    const handleTodoClick = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        }))
    }

    return (
        <div>
            <div>
                <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <button type='button' onClick={handleTodoAddClick}>Add Todo</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}
                    style={{ textDecoration: todo.completed ? 'line-through': 'none'}}
                    onClick={() => handleTodoClick(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}