import React from "react";
import TableParams from "./parameters";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {AuthRedirect} from "../hooks/use-auth";

let mapStateToProps = (state) => {
    return {
        machineList: state.ParamsPage.machine
    }
}

export default compose(connect(mapStateToProps, {}), withRouter, AuthRedirect) (TableParams);