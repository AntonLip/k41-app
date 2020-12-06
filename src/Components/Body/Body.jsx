import React from 'react';
import {Route} from 'react-router-dom'

import NewsContainer from './News/NewsComponenta'
import Lessons from './Lessons/Lessons'
import Who from './Who/Who'
import Classrooms from './Classrooms/Classrooms'
import Comp404 from './404/Comp404'
import History from './History/History'
import LoginSuccessContainer from './../Login/LoginContainer'
import TimetibleContainer from './Timetable/TimetableComponenta';
import TimeTable from './Timetable/TimeTable';
const Body = (props) => {
  return (
    <>
      <Route exact path="/" render={()=><NewsContainer/>} />
      <Route path="/lessons" render={()=><Lessons/>} />
      <Route path="/timetable" render={()=><TimetibleContainer/>} />
      <Route path="/cadets" render={()=><Who/>} /> 
      <Route path="/officers" render={()=><Who/>} /> 
      <Route path="/classrooms" render={()=><Classrooms/>} /> 
      <Route path="/tech" render={()=><Comp404/>} />
      <Route path="/science" render={()=><Comp404/>} />
      <Route path="/history" render={()=><History/>} />

       <Route path="/signin-oidc"  render={()=>{return <LoginSuccessContainer />} } />
    </>
  );
}

export default Body;