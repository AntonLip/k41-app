import React from 'react'

import Item from '../Item'

import trianglImg from '../../../../../assets/img/triangl.png'



const Sort = (props) => {
    return (
        <Item img={trianglImg} title={props.title}>
        </Item> 
    )
}

export default Sort
