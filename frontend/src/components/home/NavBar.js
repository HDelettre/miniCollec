import React from 'react';
import LoginButton from '../commandes/LoginButton';
import LogoutButton from '../commandes/LogoutButton';
import HomeButton from '../commandes/HomeButton';

const NavBar = ({setUserConnected, userConnected, setDisplayStatus, displayStatus}) => {

  console.log("NAVBAR: ", displayStatus)

  return (
    <div className='navbar'>
      {userConnected ==="" ? (<LoginButton setUserConnected={setUserConnected} />) : (<LogoutButton setUserConnected={setUserConnected} />)}

      {displayStatus !== "home" ? (<HomeButton setDisplayStatus={setDisplayStatus} />) : "" }
      
    </div>
  );
}

export default NavBar;
