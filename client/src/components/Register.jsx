import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "./RegisterSchema";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  let navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      // onSubmit: (values) => {
      //   console.log( values);
      //   const response =  fetch("/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({username:values.username, email:values.email,password:values.password}),
      //   });
      //   // const data =  response?.json(); 
      //   // console.log(data) 
      //   if (response.status === 400) {
      //     alert("Email or password is incorrect");
      //   } else {
      //     alert("register successfully");
      //     navigate("/");
      //   }
      // },
    });
  const Submit = async (e) => {
    e.preventDefault();

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username:values.username, email:values.email,password:values.password}),
    });
    const data = await response.json();
    if (response.status === 400 || !data) {
      alert("Email or password is incorrect");
    } else {
      alert("register successfully");
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={values.username}
          name="username"
          onChange={handleChange}
          placeholder="username"
          onBlur={handleBlur}
        ></input>
        {touched.username && errors.username ? (
          <p className="form-error">{errors.username}</p>
        ) : null}
        <input
          type="email"
          value={values.email}
          name="email"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="email"
        ></input>
        {touched.email && errors.email ? (
          <p className="form-error">{errors.email}</p>
        ) : null}
        <input
          type="password"
          value={values.password}
          name="password"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="password"
        ></input>
        {touched.password && errors.password ? (
          <p className="form-error">{errors.password}</p>
        ) : null}
        <button type="submit" onClick={Submit}>Register</button>
      </form>
    </div>
  );
};

export default Register;
