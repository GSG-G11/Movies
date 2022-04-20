import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Component/Card/Card";
import Details from "./Component/Details/Details";
import Page404 from "./Component/Page404/Page404.jsx";
import Header from "./Component/header/Header";

function App() {
  const [id, setId] = useState("");

  const changeId = (ids) => {
    setId(ids);
  };
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Cards changeId={changeId} />}></Route>
          <Route path="/details" element={<Details id={id} />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
