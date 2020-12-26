import React from 'react'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Filter from '../Sort/Items/Filter/Filter'

import { reduxForm } from 'redux-form'

const year = [
    { title: "3 курс" },
    { title: "4 курс" },
    { title: "5 курс" }
]

const SortForm = reduxForm({ form: 'sortLessons' })(Sort)

export class Lessons extends React.Component {
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount()
    {
        this.props.getDisciplinesName();
        this.props.getSpec();
    }

    render() {
        let AllLessons;
        this.props.nameofDiscoplines === undefined ? AllLessons = ()=>{return<Item />} :
            this.props.nameofDiscoplines.length !=0 ?  
                AllLessons = this.props.nameofDiscoplines.map((u) => { return <Item u={u} path="/lesson/"/> }) : 
                    AllLessons = ()=>{return<Item />} ;
        
        let AllSpec;
        this.props.nameofDiscoplines === undefined ? AllSpec = ()=>{return<Dropdown />} :
            this.props.nameOfSpec.length !=0 ?  
                AllSpec = this.props.nameOfSpec.map((u) => { return <Dropdown name={u.nameOfSpecialization} link={year} title={u.nameOfSpecialization}/> }) : 
                    AllSpec = ()=>{return<Dropdown />} ;
        return (
            <MainContentWrapper leftSideBar="true">
                <SortForm onSubmit={this.printInfo}>
                    {AllSpec}
                    <Filter />
                </SortForm>
                <div class="cards">
                    <div class="cards__content">
                       {AllLessons}
                    </div>
                </div>
                
            </MainContentWrapper>

        )
    }
}




