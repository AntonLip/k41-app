import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MyBody from './Components/MyBody/MyBody';
import Timetable from './Components/MyBody/Timetable/Timetable';
import { Route, BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='.app-wrapper-content'>
        <Route path="/Timetable" component={Timetable}  />
        <Route path="/MyBody" component={MyBody} />
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
