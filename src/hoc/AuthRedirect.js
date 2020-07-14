import { Redirect } from "react-router-dom"
import React, { Component }  from 'react';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) =>({
    isAuth : state.LoginReduser.loginPage.isAuth
})

export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to='/Login'/>
            return <Component {...this.props} />
        }
    }

let connRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connRedirectComponent;
}
