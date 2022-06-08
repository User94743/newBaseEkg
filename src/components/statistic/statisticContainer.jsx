import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {AuthRedirect} from "../hooks/use-auth";
import Statistic from "./statistic";
import {addAccidentToState} from "../../redux/accidentReducer";
import addAccident from "../library/addAccident/addAccident";

let mapStateToProps = (state) => {
    return {
            accidents: state.AccidentPage.list,
            listMachine: state.ParamsPage.machine
    }
}

export default compose(connect(mapStateToProps, {addAccidentToState}), withRouter, AuthRedirect) (Statistic);
