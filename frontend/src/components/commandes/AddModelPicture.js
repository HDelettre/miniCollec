import React, { useState } from "react";

const AddModelPicture = ({
  decennie,
  annee,
  recapData,
  raceSelect,
  setAddingStep,
  modelManufacturer,
  modelReference,
  modelStatus,
}) => {
  const [pictureName, setPictureName] = useState(`${process.env.REACT_APP_PICTURES}/modelcars/modelPictDefault.jpg`);
  const [pictureFile, setPictureFile] = useState();

  const pictureHandle = (e) => {
setPictureName(URL.createObjectURL(e.target.files[0]));
setPictureFile(e.target.files[0]);
  };

  const validPicture = () => {};
  const deletePicture = () => {
    setPictureFile();
    setPictureName(`${process.env.REACT_APP_PICTURES}/modelcars/modelPictDefault.jpg`)
  };

  console.log("PICTURE NAME: ", pictureName)

  return (
    <div className="recap">
      <div className="recap_info">
        <h3>Récapitulatif des données: </h3>
        Saison: {decennie.slice(0, 3)}
        {annee}
        <br />
        Pilote: {recapData.driver}
        <br />
        Constructeur: {recapData.constructor}
        <br />
        Modèle: {recapData.car}
        <br />
        Course: {raceSelect}
        <br />
        Fabricant: {modelManufacturer}
        <br />
        Reference: {modelReference}
        <br />
        Status: {modelStatus}
      </div>

      <div className="recap_data">
        <h3>Ajouter une photo</h3>
       
          <img
            src={`${pictureName}`}
            alt=""
          />
       
       <input type="file" name="modelPicture" title="modelPicture" id="modelPicture" onChange={pictureHandle} />

{pictureFile ? (
  <div className="recap_data--navbar">
        <div className="fa-regular fa-square-check icon" onClick={validPicture} ></div>
        <div className="fa-regular fa-rectangle-xmark icon" onClick={deletePicture} ></div>
       </div>
) : ("")}
       

      </div>
    </div>
  );
};

export default AddModelPicture;
