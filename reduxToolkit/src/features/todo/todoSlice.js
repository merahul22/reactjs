import { createSlice,nanoid } from "@reduxjs/toolkit";

const intialstate={
    todos:[{id:1,todo:"msg"}]
}

export const todoSlice=createSlice({
    name:"todo",
    intialstate,
    reducers:{
        addTodo:(state,action)=>{
           const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
       removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=> action.payload!==todo.id)
       }

    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer