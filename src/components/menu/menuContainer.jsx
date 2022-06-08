import React from "react";
import Menu from './menu'
import {compose} from "redux";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
 return {
     state
 }
}

export default compose(connect(mapStateToProps, {})) (Menu);