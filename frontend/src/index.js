import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//REDUX
import store from "./redux/store";
import { Provider } from "react-redux";

// IMPORT STYLES
import "./styles/styles.css";

// IMPORT COMPONENTS
import Header from "./components/standard/Header";
import Footer from "./components/standard/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);
