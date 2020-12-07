import React from 'react'

const MainContentWrapper = ({children, leftSideBar}) => {
    return (
        <div class={"main-content__wrapper" + " " + (leftSideBar ? "main-content__wrapper--left-side-bar" : "")}>
            {children}
        </div>
    )
}

export default MainContentWrapper
