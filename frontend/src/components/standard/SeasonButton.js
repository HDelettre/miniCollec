import React from 'react';

const SeasonButton = ({data, setDisplayStatus, setIdSelect}) => {
  
  const seasonHandle = (e) => {
    console.log ("DATA: ", e.target.id)
    setDisplayStatus("season");
    setIdSelect(e.target.id);
}

  return (
    <div className='season_button' id={data} onClick={seasonHandle} >
      {data}
    </div>
  );
}

export default SeasonButton;
