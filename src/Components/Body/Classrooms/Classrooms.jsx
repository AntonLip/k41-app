import React from 'react'
import {Route} from 'react-router-dom'

import Floor1 from './Floors/Floors1/Floor1'
import Floor2 from './Floors/Floors2/Floors2'
import Floor3 from './Floors/Floors3/Floors3'
import Cab from './Cab/Cab'
const Classrooms = () => {
    return (
        <div class="classrooms">
            <Route exact path="/classrooms">
                    <Floor1/>
                    <Floor2/>
                    <Floor3/>
            </Route>
            <Route exact path="/classrooms/:numCab">
                <Cab/>
            </Route> 

        </div>
    )
}

export default Classrooms
