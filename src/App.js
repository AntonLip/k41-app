import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import TimetibleContainer from './Components/MyBody/Timetable/TimetableComponenta';
import { MyNewsContainer } from './Components/MyBody/MyNews/MyNewsComponenta';
import UsersContainer from './Components/People/Lectural/UsersContainer';
import ProfileComponenta from './Components/People/Lectural/ProfileLectural/ProfileComponenta';
import LoginSuccessContainer from './Components/Login/LoginContainer';
import { EducationPart } from './Components/MyBody/EducationalPart/EducationalPart';
import NewUserContainer from './Components/People/Lectural/newLectural/newLecturalContainer'
import { HistoryOfChief } from './Components/MyBody/Chief/History/history';
import  ChiefComponent  from './Components/MyBody/Chief/chiefComponent';
import UpdateUserContainer from './Components/People/Lectural/updateLectural/updateLecturalContaineer';
import CadetsComponent from './Components/People/Cadets/CadetsComponent';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app_wrapper_content'>
        <Route path="/EducationPage" render={() => { return <EducationPart/> }} />
        <Route path="/Chief" render={() => { return <ChiefComponent/> }} />
        <Route path="/MyNews" render={() => { return <MyNewsContainer /> }} />
        <Route path="/Users" render={()=>{return <UsersContainer/>}}/>
        <Route path="/Profile/:id"  render={()=>{return <ProfileComponenta />} } />
        <Route path="/signin-oidc"  render={()=>{return <LoginSuccessContainer />} } />
        <Route path="/Timetable"  render={()=>{return <TimetibleContainer />} } />
        <Route path="/Cadets" render={()=>{return <CadetsComponent />} }/>
        <Route path="/History" render={()=>{return <HistoryOfChief />} }/>
        <Route path="/newUser" render={()=>{return <NewUserContainer />} }/>
        <Route path="/updateUser/:id" render={()=>{return <UpdateUserContainer />} }/>
      </div>
      <Footer />
    </div>
  );
}


export default App;
