import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className='main-content'>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
