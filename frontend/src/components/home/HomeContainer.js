import React, { useState } from "react";

// IMPORT COMPONENTS
import InfoBar from "./InfoBar";
import NavBar from "./NavBar";
import HomeCard from "./HomeCard";
import SeasonsMenu from "../pages/SeasonsMenu";
import TeamsMenu from "../pages/TeamsMenu";
import DriversMenu from "../pages/DriversMenu";
import CarSheet from "../pages/CarSheet";

const HomeContainer = () => {
  const [userConnected, setUserConnected] = useState("");
  const [navStatus, setNavStatus] = useState("home");
  const [displayStatus, setDisplayStatus] = useState("home");
  const [idSelect, setIdSelect] = useState("");

  return (
    <div className="homecontainer">
      <InfoBar />

      <div className="homecontainer_box">
        <NavBar
          setUserConnected={setUserConnected}
          userConnected={userConnected}
          setDisplayStatus={setDisplayStatus}
          displayStatus={displayStatus}
        />

        {displayStatus === "home" ? (
          <HomeCard
            setDisplayStatus={setDisplayStatus}
            setIdSelect={setIdSelect}
          />
        ) : (
          ""
        )}
        {displayStatus === "seasons" ? <SeasonsMenu /> : ""}
        {displayStatus === "teams" ? <TeamsMenu /> : ""}
        {displayStatus === "drivers" ? <DriversMenu /> : ""}
        {displayStatus === "car" ? <CarSheet idSelect={idSelect} /> : ""}
      </div>
    </div>
  );
};

export default HomeContainer;
