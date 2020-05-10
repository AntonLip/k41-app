import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MyBody from './Components/MyBody/MyBody';
import Timetable from './Components/MyBody/Timetable/Timetable';
import { Route, BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LeftSide from './Components/LeftSide/LeftSide';


const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='.app-wrapper-content'>
        <Route path="/Timetable" render={() =>
           {return <Timetable dataLesson={props.state.LessonData}  dataGroups={props.state.Groups}/>}}/>
        <Route path="/MyBody" render={() => {return <MyBody state={props.state} dispatch={props.dispatch}/>}}/>
      </div>
      <LeftSide/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;
