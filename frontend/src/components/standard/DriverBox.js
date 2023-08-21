import React from 'react';

const DriverBox = ({data, setAddingStep, setDriverSelect}) => {

  const driverHandle = (e) => {
    setDriverSelect(e.target.id)
    setAddingStep(30)
  };

  return (
    <div className='driverbox' id={data.driver} onClick={driverHandle} >
      {data.driver}
      <br/>
      {data.car}
    </div>
  );
}

export default DriverBox;
