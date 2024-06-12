import React, { useState } from 'react'
import { useTodoCotext } from '../context/todoContext';

function TodoForm() {
    const [todos,setTodos]=useState([])

   const {addTodo} =useTodoCotext()
if(!todos) return
   const add=(e)=>{
e.preventDefault()
addTodo({completed:false,todos})
setTodos("")
   }

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todos}
                onChange={(e)=>setTodos(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

