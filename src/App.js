import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MyBody from './Components/MyBody/MyBody';
import { Route, BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LeftSide from './Components/LeftSide/LeftSide';
import TimetibleContainer, { TimetableComponenta } from './Components/MyBody/Timetable/TimetableComponenta';


const App = (props) => {
debugger;
 return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='.app-wrapper-content'>
        <Route path="/Timetable" render={() =>
            {return <TimetibleContainer dataPage={props.state.timetableReduser.timetablePage} dispatch={props.dispatch}/>}}/>
        <Route path="/MyBody" render={() => 
            {return <MyBody News={props.state.newsReduser.newsPage}  dispatch={props.dispatch}/>}}/>
      </div>
      <LeftSide/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;
