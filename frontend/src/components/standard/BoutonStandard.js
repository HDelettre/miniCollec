import React from "react";

// IMPORT BDD
import bdd1950 from "../../bdd/fullDB50";
import bdd1960 from "../../bdd/fullDB60";
import bdd1970 from "../../bdd/fullDB70";
import bdd1980 from "../../bdd/fullDB80";
import bdd1990 from "../../bdd/fullDB90";
import bdd2000 from "../../bdd/fullDB00";
import bdd2010 from "../../bdd/fullDB10";
import bdd2020 from "../../bdd/fullDB20";

const BoutonStandard = ({
  data,
  setAddingStep,
  addingStep,
  setDecennie,
  decennie,
  setAnnee,
  setSeasonData,
  setOption,
}) => {
  const selectHandle = (e) => {

    if (addingStep === 0) {
      setDecennie(e.target.id);

      if (e.target.id === "1950") {
        setSeasonData(bdd1950);
      } else if (e.target.id === "1960") {
        setSeasonData(bdd1960);
      } else if (e.target.id === "1970") {
        setSeasonData(bdd1970);
      } else if (e.target.id === "1980") {
        setSeasonData(bdd1980);
      } else if (e.target.id === "1990") {
        setSeasonData(bdd1990);
      } else if (e.target.id === "2000") {
        setSeasonData(bdd2000);
      } else if (e.target.id === "2010") {
        setSeasonData(bdd2010);
      } else if (e.target.id === "2020") {
        setSeasonData(bdd2020);
      }
    } else if (addingStep === 1) {
      setAnnee(parseInt(e.target.id));
    } else if (addingStep === 2) {
      setOption(e.target.id);
    }

    setAddingStep(addingStep +1);
  };

  let disValue = 0;

  if (addingStep === 1) {
    disValue = parseInt(data) + parseInt(decennie);
  } else {
    disValue = data;
  };

  return (
    <div className="boutonstd" id={data} onClick={selectHandle}>
      {disValue}
    </div>
  );
};

export default BoutonStandard;
