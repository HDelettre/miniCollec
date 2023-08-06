import React from "react";

const InfoBar = ({ userConnected }) => {
  console.log("INFO BAR: ", userConnected.firstName)
  return (
    <>
      <div className="infocontainer">
        <div className="infocontainer_box">
          {userConnected.firstName ? (`${userConnected.firstName} ${userConnected.lastName} / ${userConnected.role}`) : ("Non Connecté")}
        </div>
        <div className="infocontainer_box">DATE</div>
      </div>
    </>
  );
};

export default InfoBar;
