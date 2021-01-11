import React from 'react'

import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'

import Item from './../../../Body/Cards/Item'
import Sort from '../../Sort/SortItem'

import { reduxForm } from 'redux-form'

const year = [
    { title: "3 курс" },
    { title: "4 курс" },
    { title: "5 курс" }
]

export class VideoCourses extends React.Component {
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount()
    {
        this.props.getVideoCourses();
    }

    render() {
        let AllCourses;
        this.props.videocourses === undefined ? AllCourses = ()=>{return<Item />} :
            this.props.videocourses.length !=0 ?  
            AllCourses = this.props.videocourses.map((u) => { return <Item u={u} path="/VideoCourse/"/> }) : 
            AllCourses = ()=>{return<Item />} ;
        
        
        return (
            <MainContentWrapper leftSideBar="false">               
                <div class="cards">
                    <div class="cards__content">
                       {AllCourses}
                    </div>
                </div>
                
            </MainContentWrapper>

        )
    }
}




