import React from 'react';

const SeasonChoice = ({allModels, setDisplayStatus, idSelect}) => {

const seasonList = [];

for (let i=0; i<allModels.length; i++) {
  if (allModels[i].season === parseInt(idSelect)) {seasonList.push(allModels[i].modelCarsId)}
};

seasonList.sort();

  return (
    <div>
      SEASON CHOICE {idSelect} {seasonList}
    </div>
  );
}

export default SeasonChoice;
