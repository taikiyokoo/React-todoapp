import React from 'react'

export const Todo = ({todo,toggleTodo}) => {
    const handleTodoClick =()=>{
        toggleTodo(todo.id);
    };
    
  return (
    <div>
        <label>
            <input type="checkbox"
             checked={todo.completed} 
             readOnly 
             onChange={handleTodoClick}></input>
        </label>
        {todo.name}
    </div>
  )
}
