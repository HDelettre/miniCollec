import React from "react";
import HomeVignette from "../home/HomeVignette";
import Titlebloc from "../standard/Titlebloc";

const SeasonChoice = ({ allModels, setDisplayStatus, idSelect, setIdSelect }) => {
  const seasonList = [];

  for (let i = 0; i < allModels.length; i++) {
    if (allModels[i].season === parseInt(idSelect)) {
      seasonList.push(allModels[i].modelCarsId);
    }
  }

  seasonList.sort();

  console.log("SEASON LIST: ", seasonList);

  console.log("DATA MODEL: ", allModels[seasonList[0]]);

  return (
    <div className="homecontainer_card">
      <Titlebloc sectionTitle={`Modèles de la saison ${idSelect} :`} />
      <div className="homecontainer_card--section">
        {seasonList.map((data) => (
          <HomeVignette modelData={allModels[data]} setDisplayStatus={setDisplayStatus} setIdSelect={setIdSelect}   />
        ))}
      </div>
    </div>
  );
};

export default SeasonChoice;
