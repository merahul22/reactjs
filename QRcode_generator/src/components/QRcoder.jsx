import { useRef, useState } from "react"
import QRcode from 'qrcode.react'

function QRcoder(){
    const [text,settext]=useState('')
  function handleinput(e){
settext(e.target.value)
  }

return (
<>
<input type="text" 
ref={refernce}
value={text} 
onChange={handleinput}/>
<QRcode value={text}/>
</>
)




}

export default QRcoder