import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
 
   const {user} = useContext(UserContext)
   if(!user) return <div>pls login first</div>
    return <div>
        welcome {user.username}
    </div>
 
}

export default Profile