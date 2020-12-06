import React from 'react';
import './App.css';
import { Redirect, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar'
import LeftSide from './Components/LeftSide/LeftSide'
import Body from './Components/Body/Body'



const App = (props) => {
  return (
    <>
      <Header />
      <NavBar />
      <div class="main-content">
        <div class="container">
          <div class="main-content__wrapper">
            <div class="main-content__left">
              <LeftSide />
            </div>
            <div class="main-content__right">
              <Body />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
