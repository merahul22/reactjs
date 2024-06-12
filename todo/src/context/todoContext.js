import { createContext,useContext } from "react";

export const TodoContext=createContext(
{todos:[
    {
        id:1,
        todo:"Todo msg",
        completed:false
    }
],
addTodo:(todo)=>{},
deleteTodo:(id)=>{},
updateTodo:(id,todo)=>{},
toggleComplete:(todo)=>{}


}
)

export const TodoContextProvider=TodoContext.Provider
 export const  useTodoCotext=()=>{
    return useContext(TodoContext)
}