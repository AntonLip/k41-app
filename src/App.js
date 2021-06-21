import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'


const App = (props) => {
  return (
    <>
      <Header />
      <NavBar />
      <div class="main-content">
        <div class="container">
            <Body/>
            
        </div>
      </div>
    </>
  );
}


export default App;
