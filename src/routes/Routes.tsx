import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import Main from "../pages/Main/Main";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
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
