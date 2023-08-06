import React from "react";

// IMPORT COMPONENTS
import SeasonButton from "../standard/SeasonButton";
import Titlebloc from "../standard/Titlebloc";

const SeasonsMenu = ({ allModels, setDisplayStatus, setIdSelect }) => {

  const seasonList = [];

  for (let i = 0; i < allModels.length; i++) {
    if (!seasonList.includes(allModels[i].season)) {
      seasonList.push(allModels[i].season);
    }
  }

  seasonList.sort();

  return (
    <>
      <div className="homecontainer_card">
        <Titlebloc sectionTitle={"Choix de la saison :"} />

        <div className="season">
          {seasonList.map((data) => (
            <SeasonButton data={data} key={data} setDisplayStatus={setDisplayStatus} setIdSelect={setIdSelect} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SeasonsMenu;
