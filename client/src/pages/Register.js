import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Store/fearures/auth-slice";
// 795770346023-kscfpb99ke89qc40ul1pvenvhek698mj.apps.googleusercontent.com
const Register = () => {
const [initialValues,setInitailValues] = useState({ username: "",email:"",
password: ""});
const [confirmPassword,setConfirmPassword] =useState("");

let navigate = useNavigate();
let dispatch =useDispatch();

const submit = (e)=>{
    e.preventDefault();
    if(initialValues.password !== confirmPassword){
        return alert("password does not match");
    }
    if(initialValues.username&&initialValues.email&&initialValues.password){
        dispatch(register({initialValues,navigate}))
    }
}

const onInput = (e)=>{
    let{name,value}= e.target;
    setInitailValues({...initialValues,[name]:value});
}

    return (
        <div>
          <form method="POST">
            <input
              type="text"
              value={initialValues.username}
              name="username"
              onChange={onInput}
              placeholder="username"
            ></input>
            <input
              type="email"
              value={initialValues.email}
              name="email"
              onChange={onInput}
              placeholder="email"
            ></input>
             <input
              type="password"
              value={initialValues.password}
              name="password"
              onChange={onInput}
              placeholder="password"
            ></input>
             <input
              type="password"
              value={confirmPassword}
              name="confirm password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="confirm password"
            ></input>
            <button type="submit" onClick={submit}>
              Register
            </button>
          </form>
        </div>
      );
    };
    
export default Register;
