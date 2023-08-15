import React, { useEffect, useState } from "react";

// IMPORT BDD
import manufacturerCollection from "../../bdd/manufacturerCollection";

import Testbutton from "./testbutton";
import listOfManufacturer from "../../bdd/listOfManufacturer";

const ValidationCreateCar = ({
  recapData,
  decennie,
  annee,
  setAddingStep,
  raceSelect,
}) => {
  // const [test, setTest] = useState([
  //   "Spark",
  //   "Minichamps",
  //   "Brumm",
  //   "Ixo",
  //   "Presse",
  //   "Hot Wheels",
  //   "Looksmart",
  // ]);
  const [test, setTest] = useState(listOfManufacturer);

  console.table("INIT TEST: ", test);

  const ManufacturerHandle = () => {};

  return (
    <>
      <div>
        <h3>Récapitulation des données: </h3>
        <div>
          Saison: {decennie.slice(0, 3)}
          {annee}
          <br />
          Pilote: {recapData.driver}
          <br />
          Constructeur: {recapData.constructor}
          <br />
          Modèle: {recapData.car}
          <br />
          Course: {raceSelect}
        </div>
      </div>

      <div>
        <h3>Finalisation des données: </h3>
        {test ? (
          <>
            {/* {test.map((data) => <>{data}<br/></>)} */}


            <select name="man" id="man">
              {test.map((data) => 
              <option name={data} key={data} id={data}>
                {data}
              </option>
              )}
            </select>
          </>
        ) : (
          "B"
        )}
      </div>
    </>
  );
};

export default ValidationCreateCar;
