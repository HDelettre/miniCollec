import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Titlebloc from "../standard/Titlebloc";
import BoutonStandard from "../standard/BoutonStandard";
import FlagBox from "../standard/FlagBox";
import DriverBox from "../standard/DriverBox";
import ValidationCreateCar from "../commandes/ValidationCreateCar";
import AddModelPicture from "../commandes/AddModelPicture";
import CarsSelection from "../standard/CarsSelection";
import DriverCarBox from "../standard/DriverCarBox";

const AddNewCar = ({setDisplayStatus}) => {
  const [addingStep, setAddingStep] = useState(0);
  const [seasonData, setSeasonData] = useState();
  const [decennie, setDecennie] = useState();
  const [annee, setAnnee] = useState();
  const [option, setOption] = useState("");
  const [raceList, setRaceList] = useState();
  const [carsList, setCarsList] = useState();
  const [carSelect, setCarSelect] = useState();
  const [raceSelect, setRaceSelect] = useState();
  const [driverList, setDriverList] = useState();
  const [driverSelect, setDriverSelect] = useState("");
  const [recapData, setRecapData] = useState();
  const [modelManufacturer, setModelManufacturer] = useState();
  const [modelReference, setModelReference] = useState("");
  const [modelStatus, setModelStatus] = useState("");
  const [modelId, setModelId] = useState();
const [teamSelect, setTeamSelect] = useState();

  const periodeList = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

  const anneeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const optionList = ["Race", "Cars"];

  console.log("ADDING STEP: ", addingStep);

  useEffect(() => {
    if (addingStep === 3) {
      const dataSeason = seasonData[annee];

      if (option === "Race") {
        setRaceList(dataSeason.calendar);
        setAddingStep(10);
      } else if (option === "Cars") {
        setCarsList(dataSeason.cars);
        setAddingStep(20);
      }
    }

    if (addingStep === 11) {
      raceList.map((data) => {
        if (data.race === raceSelect) {
          setDriverList(data.subscript);
          setAddingStep(15)
        }
      });
    }

    if (addingStep === 25) {
      carsList.map((data) => {
        if (data.model === carSelect) {
          console.log("CARLIST: ", data)
          console.log("SEASON DATA: ", seasonData)
          setDriverList(data.drivers);
          setTeamSelect(data.team);
          setAddingStep(17);
        }
      });
    };

    if (addingStep === 29 ) {
      const carData = {
        driver: driverSelect,
        car: carSelect,
        constructor: teamSelect,
        race: ""
      }
      setRecapData(carData)
      setAddingStep(31);
    };

    if (addingStep === 30) {
      driverList.map((data) => {
        if (data.driver === driverSelect) {
          setRecapData(data);
        }
      });
      setAddingStep(31);
    }
  }, [addingStep, driverList, recapData]);

  return (
    <div className="homecontainer_card">
      <Titlebloc sectionTitle="Ajoût d'un modèle dans la collection :" />

      {addingStep === 0 ? (
        <>
          <h3>Choisissez la période :</h3>
          <div className="centralbloc">
            {periodeList.map((data) => (
              <BoutonStandard
                data={data}
                setAddingStep={setAddingStep}
                addingStep={addingStep}
                setDecennie={setDecennie}
                setSeasonData={setSeasonData}
                key={data}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {addingStep === 1 ? (
        <>
          <h3>Choisissez l'année :</h3>
          <div className="centralbloc">
            {anneeList.map((data) => (
              <BoutonStandard
                data={data}
                setAddingStep={setAddingStep}
                addingStep={addingStep}
                setDecennie={setDecennie}
                decennie={decennie}
                setAnnee={setAnnee}
                key={data}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {addingStep === 2 ? (
        <>
          <h3>Choisissez l'option : </h3>
          <div className="centralbloc">
            {optionList.map((data) => (
              <BoutonStandard
                data={data}
                key={data}
                setAddingStep={setAddingStep}
                addingStep={addingStep}
                setOption={setOption}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {addingStep === 10 ? (
        <>
          <h3>Choisissez la course : </h3>
          <div className="flag">
            {raceList.map((race) => (
              <FlagBox
                race={race}
                key={race.race}
                setAddingStep={setAddingStep}
                addingStep={addingStep}
                setRaceSelect={setRaceSelect}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {addingStep === 15 && driverList ? (
        <>
          <h3>Choisissez le pilote : </h3>
          <div className="flag">
            {driverList.map((data) => (
              <DriverBox
                data={data}
                setAddingStep={setAddingStep}
                addingStep={addingStep}
                setDriverSelect={setDriverSelect}
                key={data.driver}
              />
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {addingStep === 17 ? (
        <>
        <h3>Choisissez le pilote pour {carSelect} : </h3>
        <div className="flag">

        {driverList.map((data) => (
          <DriverCarBox data={data} key={data} setAddingStep={setAddingStep} setDriverSelect={setDriverSelect} />
          ))}
          </div>
        </>
      ):("")}

      {addingStep === 20 ? <>
      <h3>Choisissez le modèle:</h3>
      <div className="flag">
        {carsList.map((data) => (
          <CarsSelection data={data} key={data.model} setAddingStep={setAddingStep} setCarSelect={setCarSelect} />
        ))}
      </div>
      </> : ""}

      {addingStep === 31 ? (
        <ValidationCreateCar
          recapData={recapData}
          setAddingStep={setAddingStep}
          decennie={decennie}
          annee={annee}
          raceSelect={raceSelect}
          setModelManufacturer={setModelManufacturer}
          modelManufacturer={modelManufacturer}
          setModelReference={setModelReference}
          modelReference={modelReference}
          setModelStatus={setModelStatus}
          modelStatus={modelStatus}
          setModelId={setModelId}
        />
      ) : (
        ""
      )}

      {addingStep === 40 ? (<AddModelPicture recapData={recapData}
          setAddingStep={setAddingStep}
          decennie={decennie}
          annee={annee}
          raceSelect={raceSelect}
          modelManufacturer={modelManufacturer}
          modelReference={modelReference}
          modelStatus={modelStatus}
          modelId={modelId}
          setDisplayStatus={setDisplayStatus}
           />) : ("")}

      {/* <div className='validButton' onClick={validHandle}>VALIDER</div> */}
    </div>
  );
};

export default AddNewCar;
