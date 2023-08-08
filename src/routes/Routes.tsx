import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

const Home = lazy(() => import("../pages/Main/Main"));
const Login = lazy(() => import("../pages/Login/Login"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
    </Routes>
  );
};

const Views = (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <RoutesList {...props} />
    </Suspense>
  );
};

export default Views;
