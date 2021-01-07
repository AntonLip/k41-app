import React from 'react'

export const TableRow = (props) => {
    debugger
    if (props.u === undefined) {
        return (
            <tr><td>1</td><td>Сокол</td><td>Виктор</td><td>Виктор</td><td>Курсант</td><td>рядовой</td><td>453</td></tr>
        )
    }
    else {
        let Unit = props.u.unit;
        Unit === "undefined"  ? Unit = "Кафедра АСУВ" : Unit = props.u.unit;
        let gr = props.u.groupNumber;
        let toH
        props.IsOfficers ? toH =  Unit : toH =  gr;
        
        return (
            <tr key={props.u.id}><td>{props.u.id.split("-")[0]}</td><td>{props.u.lastName}</td><td>{props.u.firstName}</td><td>{props.u.middleName}</td><td>{props.u.position}</td><td>{props.u.militaryRank}</td><td>{toH}</td></tr>
        )
    }

}
 