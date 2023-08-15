import React from 'react';

const CreateModelButton = ({setDisplayStatus}) => {

  const createModelHandle = () => {
    setDisplayStatus('addcar');
  };

  return (
    <div  className='navbar_icon fa-solid fa-car' title='Add Car' onClick={createModelHandle}>
    </div>
  );
}

export default CreateModelButton;
