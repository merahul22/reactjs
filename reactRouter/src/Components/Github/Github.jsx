import React, { useEffect, useState, } from 'react'

import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData()
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/merahul22')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    //this is loading data as page is loaded 
   
  return (
  <>
    <div>Github followers:{data.followers}</div>
  <img 
  src={data.avatar_url} 
  alt="avatar" />
  </>
    
  )
}

export default Github

  export const githubInfo=async ()=>{
   const response=await  fetch('https://api.github.com/users/merahul22')
   return response.json()
}

// this is fetching and loading data as it is hovered

