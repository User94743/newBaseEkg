import React from "react";
import style from './menu.module.css'
import {NavLink} from "react-router-dom";
class menu extends React.Component {

    componentDidMount() {

    }

    render() {
        return <div className={style.wrap}>
            {
                <div className="container-lg">

                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <NavLink to={'/parameters'} className={"nav-link"}>Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/statistic'} className={"nav-link"}>Статистика</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/library'} className={"nav-link"}>Библиотека</NavLink>
                        </li>
                    </ul>

                </div>
            }
        </div>
    }
}

export default menu;

