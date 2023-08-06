import React, { useState } from "react";

const LoginSheet = ({setUserConnected, setDisplayStatus}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = () => {
    const userTest = {
      "email":"admin",
      "firstName": "Administrateur",
      "lastName": "",
      "role": "ADMIN"
    }
    setUserConnected(userTest);
    setDisplayStatus("home")
  };

  const emailHandle = (e) => {
    setEmail(e.target.value)
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value)
  };

  return (
    <>
      <div className="homecontainer_card">
        <div className="login">
          <form
            action=""
            name="loginform"
            onSubmit={loginHandle}
            className="login_form"
          >
            <h2>SE CONNECTER</h2>
            <input
              type="email"
              name="email"
              id="email"
              onChange={emailHandle}
              value={email}
              required
              placeholder="Email"
              className="login_form--input"
            />

            <br />

            <input
              type="password"
              name="password"
              id="password"
              onChange={passwordHandle}
              value={password}
              required
              placeholder="Password"
              className="login_form--input"
            />

            <br />

            <div className="validButton" onClick={loginHandle}>
              VALIDER
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSheet;
