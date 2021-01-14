import React from 'react'

import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'

import Item from './../../../Body/Cards/Item'
import Sort from '../../Sort/SortItem'

import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

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
        this.props.getDisciplinesName();
    }

    render() {
        let AllCourses;
        this.props.videocourses === undefined ? AllCourses = ()=>{return<Item />} :
            this.props.videocourses.length !=0 ?  
            AllCourses = this.props.videocourses.map((u) => { return <Item u={u} path="/VideoCourse/"/> }) : 
            AllCourses = ()=>{return<Item />} ;
        
        console.log(this.props)
        return (
            <MainContentWrapper leftSideBar="false"> 
            <div class="sort cards__sort">
                {
                    this.props.nameofDiscoplines.map((u) => { 
                        return (<Link  class="sort__item">
                                    <div class="sort__title">{u.name}</div>
                                    <div class="sort__img"></div> 
                                </Link>) 
                        })
                }
            </div>              
            <div class="cards">
                <div class="cards__content">
                    {AllCourses}
                </div>
            </div>
                
            </MainContentWrapper>

        )
    }
}




