import React from "react";
import Menu from "../menu/menuContainer";
import style from './parameters.module.css';
import {NavLink, Route} from "react-router-dom";

class tableParameters extends React.Component {
    componentDidMount() {

    }

    render() {
        return  <div className="container-lg center">
                    <Menu />
                    <div className="row">
                        {this.props.machineList.map(m =>

                                    <div className="col-lg-2">
                                        <NavLink to={'/machine/' + m.number} className={style.text}>
                                        <div key={m.id} className={style.block_hover}>
                                        <div className={style.text}>
                                            <h1>{m.number}</h1><br/>
                                            <span>Система: {m.schema}</span>
                                        </div>
                                    </div>
                                        </NavLink>
                                </div>
                        )}
                    </div>
                </div>
    }
}

export default tableParameters;