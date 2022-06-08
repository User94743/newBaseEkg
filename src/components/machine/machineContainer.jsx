import React from "react";
import Machine from './machine'
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {editDateAC, updateParameter} from "../../redux/parametersReducer";

let mapStateToProps = (state) => {
    return {
        machine: state.ParamsPage.machine
    }
}

export default compose(
    connect(mapStateToProps, {
        editDateAC, updateParameter})
    ,withRouter) (Machine);
