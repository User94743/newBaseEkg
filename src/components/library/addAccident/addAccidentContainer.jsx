import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import addAccident from "./addAccident";
import {addAccidentToFireStore} from "../../../redux/accidentReducer";
import {AuthRedirect} from "../../hooks/use-auth";


let mapStateToProps = (state) => {
    return {
        listMachine: state.ParamsPage.machine,
        lengthAccidents: state.AccidentPage.list.length
    }
}

export default compose(connect(mapStateToProps, {addAccidentToFireStore}), withRouter, AuthRedirect) (addAccident);