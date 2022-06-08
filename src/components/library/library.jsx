import React, {useState} from "react";
import Menu from "../menu/menuContainer";
import {NavLink} from "react-router-dom";
import style from "./library.module.css";

const Library = (props) => {

    return <div className="container-lg center">
        <Menu/>
        <div>
        <div className={style.card}>
            <div className="card-body">
                <h5 className="card-title">Аварии</h5>
                <p className="card-text">Список аварий по ЭКГ с датой и временем</p>
                <NavLink to={'/accidents'} className={style.text} class="btn btn-primary">Перейти</NavLink>
            </div>
        </div>
        <div className={style.card}>
            <div className="card-body">
                <h5 className="card-title">Туториалы</h5>
                <p className="card-text">Ремонт и наладка резервного оборудования</p>
                <NavLink to={'/tutorials'} class="btn btn-primary">Перейти</NavLink>
            </div>
        </div>
        </div>
    </div>

}

export default Library;