import React from 'react';

const CarsSelection = ({data, setAddingStep, setCarSelect}) => {

  const carselectHandle = (e) => {
    console.log("CLIC")
    setCarSelect(e.target.id);
    setAddingStep(25);
  };

  return (
    <div className="boutonstd"  id={data.model} onClick={carselectHandle} >
      {data.model}
    </div>
  );
}

export default CarsSelection;
