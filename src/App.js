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
import ProfileComponenta from './Components/Users/Profile/ProfileComponenta';
import LoginSuccessContainer from './Components/Login/LoginContainer';
import { EducationPart } from './Components/MyBody/EducationalPart/EducationalPart';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='.app-wrapper-content'>
        <Route path="/EducationPage" render={() => { return <EducationPart/> }} />
        <Route path="/MyNews" render={() => { return <MyNewsContainer /> }} />
        <Route path="/Users" render={()=>{return <UsersContainer/>}}/>
        <Route path="/Profile/:id"  render={()=>{return <ProfileComponenta />} } />
        <Route path="/signin-oidc"  render={()=>{return <LoginSuccessContainer />} } />

      </div>
      <Footer />
    </div>
  );
}


export default App;
