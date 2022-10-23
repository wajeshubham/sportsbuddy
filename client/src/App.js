import React from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/createEvent";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import ProfileRegister from "./pages/ProfileRegister";
import Header from "./components/Header";
import CreateSport from "./pages/admin/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {useSelector,useDispatch} from 'react-redux'

// let id  = JSON.parse(localStorage.getItem("user"))?.isAdmin;

const App = () => {
  //   const dispatch= useDispatch();
  // const user  = JSON.parse(localStorage.getItem("user"));
  // useEffect(()=>{
  //   dispatch(loginUser(user));
  // })
  // const isLoggedIn =  useSelector(state=>state.auth.isLoggedIn);
  // console.log("fdghjk",isLoggedIn)
  const id = JSON.parse(localStorage.getItem("user"))?.isAdmin;

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/event" element={<CreateEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register_profile" element={<ProfileRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {id === true ? (
            <Route path="/admin" element={<CreateSport />} />
          ) : (
            "you are not authorized "
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
