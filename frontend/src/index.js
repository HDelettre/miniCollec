import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//REDUX
import store from "./redux/store";
import { Provider } from "react-redux";

// IMPORT STYLES
import "./styles/styles.css";

// IMPORT COMPONENTS
import Header from "./components/header/Header";
import Footer from "./components/header/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    

      <Header />
      <App />
      <Footer />
    
  </React.StrictMode>
);
