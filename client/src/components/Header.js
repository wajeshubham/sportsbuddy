import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {logout} from "../Store/fearures/auth-slice"

const Header = () => {
    const [loading,setLoading]= useState(true);


    const dispatch =useDispatch();
    const {user}= useSelector((state)=>({...state.auth}));
    // console.log("login details",user?.results)

const handleLogout = ()=>{
  dispatch(logout());
}

  return (
    <div>
        <div style={{ display:"flex",justifyContent:"space-around"}}>
            <Link to="/"> Sports Buddy</Link>
            <Link to="/"><button>Events</button></Link>
            <Link to="/event"><button>Create Event</button></Link>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/login"><button>Login</button></Link>
           
        </div>
    </div>
  )
}

export default Header