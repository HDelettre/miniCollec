import React from "react";

const LogoutButton = ([setUserConnected]) => {
  const logoutHandle = () => {
    setUserConnected("");
  };

  return (
    <div
      className="navbar_icon--red fa-solid fa-right-from-bracket"
      title="Logout"
      onClick={logoutHandle}
    ></div>
  );
};

export default LogoutButton;
