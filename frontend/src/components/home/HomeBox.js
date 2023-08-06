import React from 'react';

const HomeBox = ({ sectionName, pictName, setDisplayStatus }) => {

  const homeBoxHandle = (e) => {
    console.log("CLIC SEASON", e.target.id)
    if (e.target.id === "Saisons") { setDisplayStatus("seasons")} 
    else if (e.target.id === "Constructeurs") { setDisplayStatus("teams")}
    else if (e.target.id === "Pilotes") { setDisplayStatus("drivers")}
  }

  return (
    <div  id={sectionName} onClick={homeBoxHandle}>
      <img src={`${process.env.REACT_APP_PICTURES}/assets/${pictName}`} alt="" id={sectionName}  />
      <h3  id={sectionName}>{sectionName}</h3>
    </div>
  );
}

export default HomeBox;
