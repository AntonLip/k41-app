import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LeftSide from './Components/LeftSide/LeftSide';
import TimetibleContainer from './Components/MyBody/Timetable/TimetableComponenta';
import { MyNewsContainer } from './Components/MyBody/MyNews/MyNewsComponenta';
import UsersContainer from './Components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='.app-wrapper-content'>
        <Route path="/Timetable" render={() => { return <TimetibleContainer /> }} />
        <Route path="/MyNews" render={() => { return <MyNewsContainer /> }} />
        <Route path="/Users" render={()=>{return <UsersContainer/>}}/>
      </div>
      <LeftSide />
      <Footer />
    </div>
  );
}


export default App;
