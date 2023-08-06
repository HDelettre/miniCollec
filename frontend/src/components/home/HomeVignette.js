import React, {useEffect, useState} from 'react';

const HomeVignette = ({modelData, setDisplayStatus, setIdSelect}) => {

  const [carPicture, setCarPicture] = useState("modelPictDefault.jpg");

  useEffect(() => {
    const reponse = fetch(`${process.env.REACT_APP_API}/carsPicture/${modelData.modelCarsId}`, {
      method: "GET"
    });

    if (reponse.ok) {
      const reponseJSON = reponse.reponseJSON();
      setCarPicture(reponseJSON);
    }
  }, [carPicture]);

const carsHandle = (e) => {
  console.log(e.target.id)
  setDisplayStatus("car")
  setIdSelect(e.target.id)
}

  return (
    <div className='homecontainer_vignette' onClick={carsHandle}>
      <img src={`${process.env.REACT_APP_PICTURES}/modelcars/${carPicture}`} alt=""  id={modelData.modelCarsId}/>
      <h3 id={modelData.modelCarsId}>{modelData.team}</h3>
      <p id={modelData.modelCarsId}>
      {modelData.season} - {modelData.model}<br/>
      {modelData.race}
      </p>
    </div>
  );
}

export default HomeVignette;
