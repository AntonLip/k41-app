import React from 'react'

import SortItem from '../Sort/SortItem'
import Sort from '../Sort/Items/Sort/Sort'
import TableRow from './Item/TableRow/TableRow'
import Profile from './Item/Profile/Profile'

const who = () => {
    return (
        <div class="who">
            <div class="who__wrapper">
                <div class="table who__table">
                    <SortItem>
                        <Sort title="По алфавиту"/>
                        <Sort title="По званию"/>
                        <Sort title="По подразделению"/>
                        <Sort title="По должности"/>
                    </SortItem>
                    <div class="table__wrapper">
                        <table>
                            <tr>
                                <th>Рег<br></br>номер</th>
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Отчетсво</th>
                                <th>Должность</th>
                                <th>В/звание</th>
                                <th>Подразделение</th>
                            </tr>
                            <TableRow/>
                            <TableRow/>
                            <TableRow/>
                            <TableRow/>
                            
                        </table>   
                    </div>
                </div>
                <Profile/>
            </div>
        </div>
    )
}

export default who
