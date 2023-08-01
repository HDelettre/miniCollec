import React from 'react';

// IMPORT COMPONENTS
import InfoBar from './InfoBar';
import NavBar from './NavBar';
import HomeCard from './HomeCard';

const HomeContainer = () => {
  return (
    <div className='homecontainer'>
      <InfoBar />

      <div className='homecontainer_box'>
        <NavBar />
        <HomeCard />
      </div>
    </div>
  );
}

export default HomeContainer;
