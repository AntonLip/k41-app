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

 return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='.app-wrapper-content'>
        <Route path="/Timetable" render={() =>
           {return <Timetable dataPage={props.state.timetablePage} dispatch={props.dispatch.bind(props.state)}/>}}/>
        <Route path="/MyBody" render={() => {return <MyBody News={props.state.newsPage}  dispatch={props.dispatch}/>}}/>
      </div>
      <LeftSide/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;
