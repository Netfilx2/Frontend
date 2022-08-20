import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/login" exact="true" element={<Login />} />
          <Route path="/Member" exact="true" element={<Member />} />
          <Route path="/movies" exact="true" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
