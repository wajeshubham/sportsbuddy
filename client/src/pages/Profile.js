import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProfile } from "../Store/fearures/profile-slice";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let userId = location.state;
  let dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const profile = useSelector((state) => state.profile.profile);
  
  useEffect(() => {
      dispatch(getProfile({userId,setLoading}));
  }, [userId]);

  let id = JSON.parse(localStorage.getItem("user"))?.details;

  return (
    <div>
      {loading ? (
        ""
      ) : profile !== null ? (
        <div>
          <h1>Profile</h1>
          <h1>{profile?.postedBy?.username}</h1>
          <h1>{profile?.fullname}</h1>
          <h3>{profile?.email}</h3>
          <h1>{profile?.location}</h1>
          <h3>{profile?.bio}</h3>
          <h3>{profile?.favoriteSport?.map((item) => item)}</h3>
          <h3>{profile?.date}</h3>
        </div>
      ) : (
        <div>
          {userId !== id?._id ? (
            <div>
              <h1>User have not setup profile yet</h1>
            </div>
          ) : (
            <div>
              <h1>Profile</h1>
              <h3>{id?.username},Please setup your profile</h3>
              <button onClick={() => navigate("/register_profile")}>
                Create Profile
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
