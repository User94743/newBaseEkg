import React from "react";
import {connect} from "react-redux";
import Welcome from "./welcome";
import {compose} from "redux";
import {setMessageError, setUser} from "../../redux/userReducer";

let mapStateToProps = (state) => {
        return {
            messageError: state.UserPage.messageError
        }
}

export default compose(connect(mapStateToProps, {setMessageError, setUser})) (Welcome);