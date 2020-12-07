import React from 'react';
import {Route} from 'react-router-dom'

import NewsContainer from './News/NewsComponenta'
import Lessons from './Lessons/Lessons'
<<<<<<< HEAD
import Classrooms from './Classrooms/Classrooms'
import Comp404 from './404/Comp404'
import History from './History/History'
import LoginSuccessContainer from './../Login/LoginContainer'
import TimetibleContainer from './Timetable/TimetableComponenta';
import WhoComponent from './Who/WhoComponent';
=======
import Timetable from './Timetable/TimeTable'
import Who from './Who/Who'
import Classrooms from './Classrooms/Classrooms'
import Comp404 from './404/Comp404'
import History from './History/History'

>>>>>>> refs/remotes/origin/Tsarenkov
const Body = (props) => {
  return (
    <>
      <Route exact path="/" render={()=><NewsContainer/>} />
      <Route path="/lessons" render={()=><Lessons/>} />
<<<<<<< HEAD
      <Route path="/timetable" render={()=><TimetibleContainer/>} />
      <Route path="/cadets" render={()=><WhoComponent IsOfficers={false}/>} /> 
      <Route path="/officers" render={()=><WhoComponent IsOfficers={true}/>} /> 
=======
      <Route path="/timetable" render={()=><Timetable/>} />
      <Route path="/cadets" render={()=><Who/>} /> 
      <Route path="/officers" render={()=><Who/>} /> 
>>>>>>> refs/remotes/origin/Tsarenkov
      <Route path="/classrooms" render={()=><Classrooms/>} /> 
      <Route path="/tech" render={()=><Comp404/>} />
      <Route path="/science" render={()=><Comp404/>} />
      <Route path="/history" render={()=><History/>} />
<<<<<<< HEAD

       <Route path="/signin-oidc"  render={()=>{return <LoginSuccessContainer />} } />
=======
>>>>>>> refs/remotes/origin/Tsarenkov
    </>
  );
}

export default Body;