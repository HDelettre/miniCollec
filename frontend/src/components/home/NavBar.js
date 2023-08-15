import React from "react";
import LoginButton from "../commandes/LoginButton";
import LogoutButton from "../commandes/LogoutButton";
import HomeButton from "../commandes/HomeButton";
import CreateModelButton from "../commandes/CreateModelButton";
import CreateUserButton from "../commandes/CreateUserButton";
import UsersList from "../commandes/UsersList";

const NavBar = ({
  setUserConnected,
  userConnected,
  setDisplayStatus,
  displayStatus,
}) => {
  return (
    <div className="navbar">
      {userConnected.role === undefined ? (
        <LoginButton setDisplayStatus={setDisplayStatus} />
      ) : (
        <>
          {userConnected.role === "USER" ? (
            <LogoutButton setUserConnected={setUserConnected} />
          ) : (
            <>
              <CreateModelButton setDisplayStatus={setDisplayStatus}  />
              <CreateUserButton setDisplayStatus={setDisplayStatus}  />
              <UsersList setDisplayStatus={setDisplayStatus}  />
              <LogoutButton setUserConnected={setUserConnected} />
            </>
          )}
        </>

        // <LogoutButton setUserConnected={setUserConnected} />
      )}

      {displayStatus !== "home" ? (
        <HomeButton setDisplayStatus={setDisplayStatus} />
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
