import React from "react";

const DriverCarBox = ({ data, setAddingStep, setDriverSelect }) => {

  const driverCarHandle = (e) => {
    setDriverSelect(e.target.id);
    setAddingStep(29);
  };

  return (
    <div className="driverbox" id={data} onClick={driverCarHandle}>
      {data}
    </div>
  );
};

export default DriverCarBox;
