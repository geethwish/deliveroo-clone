import React, { ReactNode, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import { loginStatus } from "../app/slices/login.slice";
import { useAppSelector } from "../app/hooks";

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
  const isAuthorized = useAppSelector(loginStatus);
  const location = useLocation();
  const protectedRoute = (): ReactNode => {
    if (location.pathname.includes("home")) {
      console.log(isAuthorized === "authorized");

      if (isAuthorized === "authorized") {
        return (
          <Routes>
            <Route
              path="/home/checkout"
              element={<h1>Checkout Page</h1>}
            ></Route>
          </Routes>
        );
      } else {
        return <Navigate to="/login" replace />;
      }
    }
  };
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <RoutesList {...props} />
      {protectedRoute()}
    </Suspense>
  );
};

export default Views;
