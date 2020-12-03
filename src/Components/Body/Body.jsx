import React from 'react';
import {Route} from 'react-router-dom'

import NewsContainer from './News/NewsComponenta'
import Lessons from './Lessons/Lessons'
import Timetable from './Timetable/TimeTable'
import Who from './Who/Who'
import Classrooms from './Classrooms/Classrooms'
import Comp404 from './404/Comp404'
import History from './History/History'

const Body = (props) => {
  return (
    <>
      <Route exact path="/" render={()=><NewsContainer/>} />
      <Route path="/lessons" render={()=><Lessons/>} />
      <Route path="/timetable" render={()=><Timetable/>} />
      <Route path="/cadets" render={()=><Who/>} /> 
      <Route path="/officers" render={()=><Who/>} /> 
      <Route path="/classrooms" render={()=><Classrooms/>} /> 
      <Route path="/tech" render={()=><Comp404/>} />
      <Route path="/science" render={()=><Comp404/>} />
      <Route path="/history" render={()=><History/>} />
    </>
  );
}

export default Body;