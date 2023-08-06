import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import InfoBar from "./InfoBar";
import NavBar from "./NavBar";
import HomeCard from "./HomeCard";
import SeasonsMenu from "../pages/SeasonsMenu";
import SeasonsChoice from "../pages/SeasonChoice";
import TeamsMenu from "../pages/TeamsMenu";
import DriversMenu from "../pages/DriversMenu";
import CarSheet from "../pages/CarSheet";
import LoginSheet from "../pages/LoginSheet";

const HomeContainer = () => {
  const [userConnected, setUserConnected] = useState([]);
  const [navStatus, setNavStatus] = useState("home");
  const [displayStatus, setDisplayStatus] = useState("home");
  const [idSelect, setIdSelect] = useState("");

  const [allModels, setAllModels] = useState("");

  console.log("HOME: USERCONECTED: ", userConnected);

  useEffect(() => {
    async function fetchAllModels() {
      const reponse = await fetch(`${process.env.REACT_APP_API}/modelcars`, {
        method: "GET",
      });

      const reponseJSON = await reponse.json();
      setAllModels(reponseJSON);
    }

    if (!allModels) {
      fetchAllModels();
    }
  }, [allModels]);

  return (
    <div className="homecontainer">
      <InfoBar userConnected={userConnected} />

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
            allModels={allModels}
          />
        ) : (
          ""
        )}

        {displayStatus === "login" ? <LoginSheet setUserConnected={setUserConnected} setDisplayStatus={setDisplayStatus} /> : ""}

        {displayStatus === "seasons" ? (
          <SeasonsMenu
            allModels={allModels}
            setDisplayStatus={setDisplayStatus}
            setIdSelect={setIdSelect}
          />
        ) : (
          ""
        )}

        {displayStatus === "season" ? (
          <SeasonsChoice
            allModels={allModels}
            setDisplayStatus={setDisplayStatus}
            idSelect={idSelect}
          />
        ) : (
          ""
        )}

        {displayStatus === "teams" ? <TeamsMenu /> : ""}
        {displayStatus === "drivers" ? <DriversMenu /> : ""}
        {displayStatus === "car" ? <CarSheet idSelect={idSelect} /> : ""}
      </div>
    </div>
  );
};

export default HomeContainer;
