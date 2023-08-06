import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Titlebloc from "../standard/Titlebloc";
import HomeBox from "./HomeBox";
import SpinLoader from "../standard/SpinLoader";
import HomeVignette from "./HomeVignette";

const HomeCard = ({setDisplayStatus, setIdSelect}) => {
  const [allModels, setAllModels] = useState("");

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
    <>
      <div className="homecontainer_card">
        <Titlebloc sectionTitle="Sections du Site :" />

        <div className="homecontainer_card--section">
          <HomeBox sectionName="Saisons" pictName="minimage1.jpg" setDisplayStatus={setDisplayStatus} />

          <HomeBox sectionName="Constructeurs" pictName="minimage2.png" setDisplayStatus={setDisplayStatus} />

          <HomeBox sectionName="Pilotes" pictName="minimage3.jpg" setDisplayStatus={setDisplayStatus} />
        </div>

        {allModels ? (
          <>
            <Titlebloc sectionTitle="Derniers modèles ajoutés :" />

            <div className="homecontainer_card--section">
              {allModels.slice(-3).map((modelData) => (
                <HomeVignette
                  modelData={modelData}
                  key={modelData.modelCarsId}
                  setDisplayStatus={setDisplayStatus}
                  setIdSelect={setIdSelect}
                />
              ))}
            </div>
          </>
        ) : (
          <SpinLoader />
        )}
      </div>
    </>
  );
};

export default HomeCard;
