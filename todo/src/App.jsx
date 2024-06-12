
import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/todoContext'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'
function App() {
  const [todos,setTodo]=useState([])
  const addTodo=(todo)=>{
  setTodo((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  const deleteTodo=(id)=>{
    setTodo((prev)=>{
prev.filter((todo)=>(todo.id!==d))
//filter only works on true condition
    })
  }
  const updateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
    //with prev we are storing prev todos to on direct use we will lost the state of prv todos and will add only new todo in the array
  }
  const toggleComplete=(id)=>{
setTodo((prev)=>
prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo)
)
  }

  // store in local storage using js 
  useEffect(()=>{
 const todos=JSON.parse(localStorage.getItem('todos'))
 if(todos && todos.length >0)setTodo(todos)
  },[])
useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (
    <TodoContextProvider value={{todos,addTodo,toggleComplete,deleteTodo,updateTodo}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    {  todos.map((todo)=>(
                       <div
                       key={todo.id}
                       className='w-full'
                       >
                       <TodoItem todo={todo}/>
                       </div>
                      )
                      )}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
