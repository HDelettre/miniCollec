import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Titlebloc from "../standard/Titlebloc";
import BoutonStandard from "../standard/BoutonStandard";
import SpinLoader from "../standard/SpinLoader";
import FlagBox from "../standard/FlagBox";
import DriverBox from "../standard/DriverBox";
import ValidationCreateCar from "../commandes/ValidationCreateCar";

const AddNewCar = () => {
  const [addingStep, setAddingStep] = useState(0);
  const [seasonData, setSeasonData] = useState();
  //const seasonData = {};
  const [decennie, setDecennie] = useState();
  const [annee, setAnnee] = useState();
  const [option, setOption] = useState("");
  const [raceList, setRaceList] = useState();
  const [raceSelect, setRaceSelect] = useState();
  const [driverList, setDriverList] = useState();
  const [driverSelect, setDriverSelect] = useState("");
  const [recapData, setRecapData] = useState();
  const compilData = [];

  let yearSelect = 0

  const periodeList = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

  const anneeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const optionList = ["Race", "Cars"];

  console.log("ADDING STEP: ", addingStep);

  useEffect(() => {
    if (addingStep === 3) {
      const dataSeason = seasonData[annee];
      yearSelect = decennie.slice(0,3)+annee;
      console.log("YEAR SELECT: ", yearSelect)
      compilData.push({"Season": yearSelect});
      console.log("COMPIL DATA: ", compilData)

      if (option === "Race") {
        setRaceList(dataSeason.calendar);
        setAddingStep(10);
      } else {
        const carsList = dataSeason.cars;
        setAddingStep(20);
      }
    }

    if (addingStep === 11) {
      raceList.map((data) => {
        if (data.race === raceSelect) {
          console.log("RACE LIST DATA: ", data);
          setDriverList(data.subscript);
        }
      });
    }

    if (addingStep === 30) {
      driverList.map((data) => {
        if (data.driver === driverSelect) {
          setRecapData(data);
        }
      });
      console.log("Driver List :", driverList)
      setAddingStep(31);
    }
  }, [addingStep, driverList, recapData]);

  if (recapData) {
    console.log("RECAP DATA: ", recapData);
  }

  const validHandle = () => {};

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

      {addingStep === 11 && driverList ? (
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

      {addingStep === 20 ? "List of cars" : ""}

      {addingStep === 31 ? (
        
       <ValidationCreateCar recapData={recapData} setAddingStep={setAddingStep} decennie={decennie} annee={annee} raceSelect={raceSelect} />
      ) : (
        ""
      )}

      {/* <div className='validButton' onClick={validHandle}>VALIDER</div> */}
    </div>
  );
};

export default AddNewCar;
