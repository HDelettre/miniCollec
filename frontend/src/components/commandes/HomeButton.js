import React from "react";

const HomeButton = ({ setDisplayStatus }) => {
  const homeHandle = () => {
    setDisplayStatus("home");
  };

  return (
    <div
      className="navbar_icon--blue fa-solid fa-house"
      title="Accueil"
      onClick={homeHandle}
    ></div>
  );
};

export default HomeButton;
