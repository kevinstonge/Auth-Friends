import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect } from "react-router-dom";
import axiosWithAuth from "../api/axiosWithAuth";
import "../style/Login.scss";
const schema = yup.object().shape({
  username: yup.string().required("please enter username"),
  password: yup.string().required("please enter password"),
});

const Login = (props) => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    axiosWithAuth()
      .post("/login", data)
      .then((r) => {
        localStorage.setItem("token", r.data.payload);
        props.setLoggedIn(true);
      })
      .catch((e) => {
        if (e.response) {
          console.log("server rejected login request: ", e.response.data);
        } else {
          console.log("login failed: ", e);
        }
      });
  };
  return (
    <>
      {props.loggedIn ? (
        <Redirect to="/friends" />
      ) : (
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <h2>Log in</h2>
          <label htmlFor="username">
            <span className="label">username: </span>
            <input id="username" name="username" type="text" ref={register} />
            <span className="error">{errors.username?.message}</span>
          </label>
          <label htmlFor="password">
            <span className="label">password: </span>
            <input
              id="password"
              name="password"
              type="password"
              ref={register}
            />
            <span className="error">{errors.password?.message}</span>
          </label>
          <button type="submit">log in</button>
        </form>
      )}
    </>
  );
};
export default Login;
