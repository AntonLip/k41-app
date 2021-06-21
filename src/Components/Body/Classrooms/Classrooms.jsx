import React from 'react'
import { Route } from 'react-router-dom'

import Floor1 from './Floors/Floors1/Floor1'
import Floor2 from './Floors/Floors2/Floors2'
import Floor3 from './Floors/Floors3/Floors3'
import Cab from './Cab/Cab'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import { getWindowsStatusThunkCreator } from '../../../Redux/generalInfo-reduser'
import { getWindowsStatusAPI } from '../../../API/windowsAPI'

// Возвращаемые значения разделить на три этажа


export class Classrooms extends React.Component {
    constructor(props, context) {
        super(props, context);        
    }

    state = {
       flore1:{},
       flore2:{},
       flore3:{}
    }
    componentDidMount(){
        getWindowsStatusAPI().then(data => {
            console.log(data);
            if(data != undefined)
            {
                Array.isArray(data)
                {
                    data.lenght > 1 ? 
                    this.setState({
                        flore3: {...data} 
                    }) : this.setState({
                        flore3: data 
                    })
                }
                debugger
                this.setState({
                    flore3: {...data} 
                })
            }
            console.log(this.state);
        })
    }
    getWindiwsState(){
        getWindowsStatusThunkCreator()
    }
    render() {
        return (
            <MainContentWrapper>
                <div class="classrooms">
                    <Route exact path="/classrooms">
                        <Floor1 windowsState = {this.state.flore3}/>
                        <Floor2 windowsState = {this.state.flore3}/>
                        <Floor3 windowsState = {this.state.flore3}/>
                    </Route>
                    <Route exact path="/classrooms/:numCab">
                        <Cab />
                    </Route>

                </div>
            </MainContentWrapper>
        )
    }
}
