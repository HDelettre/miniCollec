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
  modelId,
  setDisplayStatus
}) => {
  const [pictureName, setPictureName] = useState(
    `${process.env.REACT_APP_PICTURES}/modelcars/modelPictDefault.jpg`
  );
  const [pictureFile, setPictureFile] = useState();
  const [msgError, setMsgError] = useState("");

  const mimeType = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };

  const pictureHandle = (e) => {
    const mimeTypePicture = mimeType[e.target.files[0].type];

    if (e.target.files[0].size > 5000000) {
      setMsgError("Ce fichier est trop volumineux ! (Max 5 Mo)");
      setPictureFile();
      setPictureName(
        `${process.env.REACT_APP_PICTURES}/modelcars/modelPictDefault.jpg`
      );
    } else if (mimeTypePicture === undefined) {
      setMsgError(
        "Les images acceptées doivent être au format .jpg, .jpeg ou .png"
      );
      setPictureFile();
      setPictureName(
        `${process.env.REACT_APP_PICTURES}/modelcars/modelPictDefault.jpg`
      );
    } else {
      setMsgError("");
      setPictureName(URL.createObjectURL(e.target.files[0]));
      setPictureFile(e.target.files[0]);
    }
  };

  const validPicture = () => {
    const bodyRequest = new FormData();
    bodyRequest.append("modelCarsId", modelId);
    bodyRequest.append("modelPicture", pictureFile);

    console.log("bodyREQUEST: ", modelId, " / ", pictureFile);

    async function savePicture() {
      try {
        const fetchAddModel = await fetch(
          `${process.env.REACT_APP_API}/carsPicture`,
          { method: "POST", body: bodyRequest }
        );

        if (fetchAddModel.ok) {
          alert("L'image a été sauvegardée avec succès !!");
          setDisplayStatus("home");
        }
      } catch (error) {
        setMsgError("Erreur de sauvegarde du fichier !");
      }
    }

    if (msgError === "") {
      savePicture();
    }
  };

  const deletePicture = () => {
    setPictureFile();
    setPictureName(
      `${process.env.REACT_APP_PICTURES}/modelcars/modelPictDefault.jpg`
    );
  };

  console.log("PICTURE NAME: ", pictureName);

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
        <br />
        Model ID: {modelId}
      </div>

      <div className="recap_data">
        <h3>Ajouter une photo</h3>

        <img src={`${pictureName}`} alt="" />

        <input
          type="file"
          name="modelPicture"
          title="modelPicture"
          id="modelPicture"
          accept=".jpg, .jpeg, .png"
          onChange={pictureHandle}
        />

        {pictureFile ? (
          <div className="recap_data--navbar">
            <div
              className="fa-regular fa-square-check icon"
              onClick={validPicture}
            ></div>
            <div
              className="fa-regular fa-rectangle-xmark icon"
              onClick={deletePicture}
            ></div>
          </div>
        ) : (
          ""
        )}

        <div className="messageError">{msgError}</div>
      </div>
    </div>
  );
};

export default AddModelPicture;
