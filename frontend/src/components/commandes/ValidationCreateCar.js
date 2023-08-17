import React from "react";

// IMPORT BDD
import listOfManufacturer from "../../bdd/listOfManufacturer";

const ValidationCreateCar = ({
  recapData,
  decennie,
  annee,
  setAddingStep,
  raceSelect,
  setModelManufacturer,
  modelManufacturer,
  setModelReference,
  modelReference,
  setModelStatus,
  modelStatus,
}) => {
  const statusList = ["En Vitrine", "En commande", "A Monter", "A Modifier"];

  const ManufacturerHandle = (e) => {
    setModelManufacturer(e.target.value);
  };

  const ReferenceHandle = (e) => {
    setModelReference(e.target.value);
  };

  const StatusHandle = (e) => {
    setModelStatus(e.target.value);
  };

  const validHandle = () => {
    const modelData = {
      season: decennie.slice(0, 3) + annee,
      team: recapData.constructor,
      model: recapData.car,
      driver: recapData.driver,
      race: raceSelect,
      manufacturer: modelManufacturer,
      reference: modelReference,
      status: modelStatus,
    };

    console.table("MODEL DATA xx: ", modelData);

    async function fetchCreateModel() {
      const reponse = await fetch(`${process.env.REACT_APP_API}/modelCars`, {
        method: "POST",
        body: JSON.stringify(modelData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (reponse.ok) {
        setAddingStep(40);
      }
    }

    fetchCreateModel();
  };

  return (
    <>
      <div className="recap">
        <div className="recap_info">
          <h3>Récapitulatif des données: </h3>
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

        <div className="recap_data">
          <h3>Finalisation des données: </h3>
          <select name="man" id="man" onChange={ManufacturerHandle}>
            <option name="selfab" key="selfab" id="selfab">
              Choix du fabricant:
            </option>
            {listOfManufacturer.map((data) => (
              <option name={data} key={data} id={data}>
                {data}
              </option>
            ))}
          </select>

          <textarea
            value={modelReference}
            placeholder="Reference"
            onChange={ReferenceHandle}
          >
            {modelReference}
          </textarea>

          <select name="stat" id="stat" onChange={StatusHandle}>
            <option name="selstat" key="selstat" id="selstat">
              Choix du status:
            </option>
            {statusList.map((data) => (
              <option name={data} key={data} id={data}>
                {data}
              </option>
            ))}
          </select>

          <div className="validButton" onClick={validHandle}>
            VALIDER
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidationCreateCar;
