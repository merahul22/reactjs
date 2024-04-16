

import { useState } from 'react'
import './App.css'

function App() {

const [color,setcolor]=useState("black")
  return (
 <div className='w-full h-screen'
 style={{backgroundColor:color}}
 >

  <div className='flex justify-center text-white fixed bottom-11 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
<button
className='px-2 py-1 outline-none rounded-full text-white' 
style={{backgroundColor:"red"}}
onClick={()=>setcolor("red")}
>red</button>
<button
className='px-2 py-1 outline-none rounded-full text-white' 
style={{backgroundColor:"green"}}
onClick={()=>setcolor("green")}
>green</button>
<button
className='px-2 py-1 outline-none rounded-full text-white' 
style={{backgroundColor:"blue"}}
onClick={()=>setcolor("blue")}
>blue</button>
</div>
  </div>

 </div>
  )
}

export default App
