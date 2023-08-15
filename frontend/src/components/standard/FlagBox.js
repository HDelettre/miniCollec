import React from "react";

const FlagBox = ({ race, setAddingStep, addingStep, setRaceSelect }) => {
  
  const flagHandle=(e)=>{
    console.log("FLAG HANDLE: ", e.target.id)
    setRaceSelect(e.target.id);
    setAddingStep(addingStep +1);
  };

  return (
    <div className="flag_card">
      <img
        src={`${process.env.REACT_APP_PICTURES}/flags/${race.flag}`}
        alt=""
        title={race.race}
        onClick={flagHandle}
        id={race.race}
      />
    </div>
  );
};

export default FlagBox;
