
import {  useState } from "react"
import QRcode from 'qrcode.react'
function App() {
  const [text,settext]=useState('')
  function handleinput(e){
settext(e.target.value)
  }

  return (
    <>
  <h1>QRcode generator</h1>
  <input type="text" 
value={text} 
onChange={handleinput}/>
<QRcode value={text}/>
    </>
  )
}

export default App
