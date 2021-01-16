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
import LessonComponent from './Lessons/Lesson/LessonComponent';
import VideoCoursesComponent from './Lessons/VideoCourses/VideoCoursesComponent';
import VideoCourseComponent from './Lessons/VideoCourses/VideoCourse/VideoCourseComponent';
import WhoEdit from './Who/WhoEdit/WhoEdit';
import EditNews  from './News/EditNews/EditNews';

const Body = (props) => {
  return (
    <>
      <Route exact path="/" render={()=><NewsContainer/>} />
      <Route exact path="/news/:id" render={()=><SingleNews/>} />
      <Route path="/news/:id/edit" render={()=><EditNews/>} />
      <Route path="/lessons" render={()=><LessonsComponent/>} />
      <Route path="/lesson/:id" render={()=><LessonComponent/>} />
      <Route path="/VideoCourse/:id" render={()=><VideoCourseComponent/>} />
      <Route path="/VideoCourses" render={()=><VideoCoursesComponent/>} />
      <Route path="/timetable" render={()=><TimetibleContainer/>} />
      <Route path="/cadets" render={()=><WhoComponent IsOfficers={false}/>} /> 
      <Route path="/cadets/:id/edit" render={() => { return <WhoEdit IsOfficers={false} pathBack="/cadets"/> }} />
      <Route path="/officers" render={()=><WhoComponent IsOfficers={true}/>} /> 
      <Route path="/officers/:id/edit" render={() => { return <WhoEdit IsOfficers={true} pathBack="/officers"/> }} />
      <Route path="/classrooms" render={()=><Classrooms/>} /> 
      <Route path="/tech" render={()=><Comp404/>} />
      <Route path="/science" render={()=><Comp404/>} />
      <Route path="/history" render={()=><History/>} />

      <Route path="/signin-oidc"  render={()=>{return <LoginSuccessContainer />} } />
    </>
  );
}

export default Body;