import React from "react";
import { Link, Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import Home from "./Home";
import ImageBaseResults from "./result/ImageBaseResults";
import ImageBaseResPage from "./result/ImageBaseResPage";


import Footers from "./Footers";


export default function Navigation() {
  return (
    <HashRouter basename="/">
      <div className="main">


        <p >
          <Link to='/' >
          Art Institute of Chicago
          </Link>
        </p>







      </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/artistCM" element={<ImageBaseResults />} />
        <Route path="/CMpage" element={<ImageBaseResPage />} />

      </Routes>

      <Footers />
   

    </HashRouter>
  )
}
