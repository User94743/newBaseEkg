import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Link, NavLink, Route, useHistory} from "react-router-dom";
import {FormAuth} from "../FormsAuth/FormAuth";

const Welcome = (props) => {

    const {push} = useHistory()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                props.setUser(user.email, user.accessToken, user.uid)
                push('/')
            })
            .catch((error) => {
                    let msgError = '';
                    if (error.code === 'auth/too-many-requests') {
                        msgError = 'Превышено число запросов. Попробуйте позже'
                    }
                    else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                        msgError = 'Неверный логин или пароль'
                    }
                    else if (error.code === 'auth/invalid-email') {
                        msgError = 'Введите логин и пароль'
                    }
                    else {
                        msgError = 'Неизвестная ошибка: ' + error.code
                    }
                    props.setMessageError(msgError)
                }
            )
    }
    return <FormAuth title={"Войти"} handleClick={handleLogin} messageError={props.messageError} setMessageError={props.setMessageError} />

}

export default Welcome;