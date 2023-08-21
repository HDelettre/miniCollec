import React, {useEffect, useState} from 'react';

const HomeVignette = ({modelData, setDisplayStatus, setIdSelect}) => {

  const [carPicture, setCarPicture] = useState("modelPictDefault.jpg");

  console.log("modeldata ", modelData)

  useEffect(() => {
    (async () => {
      const reponse = await fetch(`${process.env.REACT_APP_API}/carsPicture/${modelData.modelCarsId}`, {
        method: "GET"
      });
  
      const reponseJSON = await reponse.json();

      if (reponseJSON.reponse !== null) {
        const pictureData = reponseJSON.reponse;
        setCarPicture(pictureData.pictureName);
      } else {
        setCarPicture("modelPictDefault.jpg")
      };
    })();

  }, []);

const carsHandle = (e) => {
  console.log(e.target.id)
  setDisplayStatus("car")
  setIdSelect(e.target.id)
}

  return (
    <div className='homecontainer_vignette' onClick={carsHandle}>
      <img src={`${process.env.REACT_APP_PICTURES}/modelcars/${carPicture}`} alt="" id={modelData.modelCarsId}/>
      <h3 id={modelData.modelCarsId} >{modelData.team}</h3>
      <p  id={modelData.modelCarsId}>
      {modelData.season} - {modelData.model}<br/>
      {modelData.driver} <br/>
      {modelData.race}
      </p>
    </div>
  );
}

export default HomeVignette;
