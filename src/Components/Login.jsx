import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let loggedIn = useSelector((res) => res.auth.isLoggedIn);
  console.log(loggedIn);
  let dispatch = useDispatch();
  return (
    <div>
      {!loggedIn ? (
        <>
          <div>
            <input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <input
              placeholder="password"
              value={pass}
              onChange={(e) => setPass(e.currentTarget.value)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                fetch("https://reqres.in/api/login", {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({ email: email, password: pass }),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    localStorage.setItem("authToken", res.token);
                    dispatch({ type: "LogIn", payload: res.token });
                  });
              }}
            >
              Login
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              localStorage.setItem("authToken", "");
              dispatch({ type: "LogOut" });
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
