import React from "react";
import {connect, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import HeaderContainer from '../header/headerContainer'

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.UserPage.isAuth
    }
}

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to={"/welcome"} />
            }
            return (
                <>
                    <HeaderContainer />
                    <Component {...this.props} />
                </>

                )

        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}