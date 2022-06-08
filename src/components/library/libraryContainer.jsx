import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Library from "./library";
import {AuthRedirect} from "../hooks/use-auth";
import {initToggle, requestAccidents} from "../../redux/accidentReducer";

let mapStateToProps = (state) => {
    return {
        init: state.AccidentPage.init
    }
}

export default compose(connect(mapStateToProps, {initToggle}), withRouter, AuthRedirect) (Library);