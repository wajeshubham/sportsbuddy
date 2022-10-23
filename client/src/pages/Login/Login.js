import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, googleLogin } from "../../Store/fearures/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  "./login.css"
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    if (loginDetails.email && loginDetails.password) {
      dispatch(login({ loginDetails, navigate }));
    }
    toast("login sucseeful");
  };
  const onInput = (e) => {
    let { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "795770346023-kscfpb99ke89qc40ul1pvenvhek698mj.apps.googleusercontent.com",
      });
    });
  }, []);

  const googleSuccess = (resp) => {
    console.log("email res", resp);
    // const email = resp.profileObj.email;
    // const name = resp?.profileObj?.name;
    // const token = resp?.tokenId;
    // const googleId = resp?.googleId;
    const result = {
      username: resp.profileObj.name,
      email: resp.profileObj.email,
      token: resp.tokenId,
      googleId: resp.googleId,
    };
    dispatch(googleLogin({ result, navigate }));
  };
  const googleFailure = (error) => {
    console.log("login google ", error);
  };

  return (
    <div className="login">
      <form method="POST">
      <div className ="loginForm">
        <h1 className="">Login</h1>
        <div className="inputBox">
        <input className="bg"
          type="text"
          value={loginDetails.email}
          name="email"
          onChange={onInput}
          required
        ></input>
        <span>Email</span>
        </div>
        <div className="inputBox">
        <input className="bg"
          type="password"
          value={loginDetails.password}
          name="password"
          onChange={onInput}
          required
        ></input>
        <span>Password</span>
        </div>
        <div >
        <button type="submit" className="btn" onClick={submit}>
          Login
        </button>
        </div>
        <div >
      <GoogleLogin
        clientId="795770346023-kscfpb99ke89qc40ul1pvenvhek698mj.apps.googleusercontent.com"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
        className="btn"
      >
        Continue with google
      </GoogleLogin>
      </div>
      <div >
        <Link to="/register" >
          <button className="btn">Register</button>
        </Link>
        </div>
      </div>
      </form>
      </div>
  );
};

export default Login;
