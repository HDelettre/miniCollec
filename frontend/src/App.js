import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORT COMPONENTS
import HomeContainer from './components/home/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
