import React from "react";
import Header from "./component/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./component/login";
import Body from "./component/body";
const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}></Route>
      <Route path='/login' element={<AuthForm/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
