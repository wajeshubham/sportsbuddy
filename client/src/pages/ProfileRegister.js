import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {useDispatch} from "react-redux";
import {registerProfile} from "../Store/fearures/profile-slice"

function ProfileRegister() {
  const [fullname, setFullname] = useState("");
  const [location, setLocation] = useState("");
  const [favoriteSport, setFavoriteSport] = useState("");
  const [bio, setBio] = useState("");

  let navigate = useNavigate();
 let dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    const profileData = {
      fullname,
      location,
      favoriteSport,
      bio,
      postedBy: `${id._id}`,
    };
    dispatch(registerProfile({profileData,navigate}));
    navigate("/")
  };
  let id = JSON.parse(localStorage.getItem("user")).details;
console.log(id._id)
  return (
    <div>
      <form method="POST">
        <input
          type="text"
          value={fullname}
          name="fullname"
          onChange={(e) => setFullname(e.target.value)}
          placeholder="fullname"
        ></input>
        <input
          type="location"
          value={location}
          name="location"
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        ></input>
        <input
          type="favoriteSport"
          value={favoriteSport}
          name="favoriteSport"
          onChange={(e) => setFavoriteSport(e.target.value)}
          placeholder="favoriteSport"
        ></input>
        <input
          type="bio"
          value={bio}
          name="bio"
          onChange={(e) => setBio(e.target.value)}
          placeholder="bio"
        ></input>
        <button onClick={submit}> submit</button>
      </form>
    </div>
  );
}

export default ProfileRegister;
