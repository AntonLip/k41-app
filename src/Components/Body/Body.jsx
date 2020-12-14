import React from 'react';
import {Route, withRouter} from 'react-router-dom'

import NewsContainer from './News/NewsComponenta'
import Lessons from './Lessons/Lessons'
import Classrooms from './Classrooms/Classrooms'
import Comp404 from './404/Comp404'
import History from './History/History'
import LoginSuccessContainer from './../Login/LoginContainer'
import TimetibleContainer from './Timetable/TimetableComponenta';
import WhoComponent from './Who/WhoComponent';
import SingleNews from './News/SingleNews'
import LessonsComponent from './Lessons/LessonsComponent';
const Body = (props) => {
  return (
    <>
      <Route exact path="/" render={()=><NewsContainer/>} />
      <Route path="/news/:id" render={()=><SingleNews/>} />
      <Route path="/lessons" render={()=><LessonsComponent/>} />
      <Route path="/timetable" render={()=><TimetibleContainer/>} />
      <Route path="/cadets" render={()=><WhoComponent IsOfficers={false}/>} /> 
      <Route path="/officers" render={()=><WhoComponent IsOfficers={true}/>} /> 
      <Route path="/classrooms" render={()=><Classrooms/>} /> 
      <Route path="/tech" render={()=><Comp404/>} />
      <Route path="/science" render={()=><Comp404/>} />
      <Route path="/history" render={()=><History/>} />

      <Route path="/signin-oidc"  render={()=>{return <LoginSuccessContainer />} } />
    </>
  );
}

export default Body;