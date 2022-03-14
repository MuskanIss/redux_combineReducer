import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./Components/Home";
import { Edit } from "./Components/Edit";
import { NotCompleted } from "./Components/NotCompleted";
import { TodoListNavigate } from "./Components/TodoListNavigate";
import { Login } from "./Components/Login";
import { useSelector } from "react-redux";

export const Router = () => {
  const loggedIn = useSelector((res) => res.auth.isLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("hj", loggedIn);
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, location]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="todo">
          <Route path=":id" element={<TodoListNavigate />}>
            <Route path="edit" element={<Edit />}></Route>
          </Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="notCompleted" element={<NotCompleted />}></Route>
        <Route path="*" element={<>Page not found</>}></Route>
      </Routes>
    </div>
  );
};
