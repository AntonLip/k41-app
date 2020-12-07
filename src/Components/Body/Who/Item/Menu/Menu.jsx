import React from 'react'
import SortItem from './../../../Sort/SortItem'
import Sort from './../../../Sort/Items/Sort/Sort'
export const Menu = (props) => {
    return (
        <SortItem>
            <Sort title="По алфавиту" />
            <Sort title="По званию" />
            <Sort title="По подразделению" />
            <Sort title="По должности" />
        </SortItem>
    )
}
