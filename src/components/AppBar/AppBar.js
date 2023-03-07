import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/logo.png';
import './AppBar.css';

const AppBar = () => {
  return (
    <header className=" header bg-dark p-3">
      <div className="container-xl">
        <div className="wrapperAppBar">
          <img src={logo} className="img" alt="logo" />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
