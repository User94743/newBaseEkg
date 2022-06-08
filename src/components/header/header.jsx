import React from 'react';
import {NavLink} from "react-router-dom";
import style from './header.module.css';


const Header = (props) => {
    return  <>
        {props.isAuth ?
            <header className={style.header}><span className={style.emailStyle}>{props.email}</span> <button type="button" class="btn btn-light" onClick={props.removeUser}>Выйти</button></header> : <NavLink to={'/welcome'}>Login</NavLink>}
        </>
}


export default Header;
