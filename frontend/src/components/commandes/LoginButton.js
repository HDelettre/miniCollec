import React from 'react';

const LoginButton = ({setDisplayStatus}) => {

  const loginHandle = () => {
    setDisplayStatus("login");
  };
  
  return (
    <div className='navbar_icon--blue fa-solid fa-right-to-bracket' title='Login' onClick={loginHandle} >
    </div>
  );
}

export default LoginButton;
