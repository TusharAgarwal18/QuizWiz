import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";

import Foot from "./components/footer/Foot";
import { Cards } from "./components/home_body/Cards";

import LoginModal from "./components/login/LoginModal";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { AboutUs } from "./components/navbar/AboutUs";
import { Category } from "./components/category/Category";
import { Quiz } from "./components/category/quiz_categories/Quiz";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <Navbar modalShow={modalShow} setModalShow={setModalShow} />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="categories" element={<Category />} />
        <Route path="categories/:category/quiz" element={<Quiz />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
