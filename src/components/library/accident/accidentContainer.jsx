import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Accident from "./accident";
import {deleteAccident, filterArray} from "../../../redux/accidentReducer";
import {AuthRedirect} from "../../hooks/use-auth";

let mapStateToProps = (state) => {
    return {
        accidents: state.AccidentPage.list,
        listMachine: state.ParamsPage.machine,
        filterArrayMachine: state.AccidentPage.filterArrayMachine,
        initToggle: state.AccidentPage.initToggle
    }
}

export default compose(connect(mapStateToProps, {deleteAccident, filterArray}), withRouter, AuthRedirect) (Accident);