import {useState} from "react";
import style from './FormAuth.module.css';

export const FormAuth = ({title, handleClick, messageError, setMessageError}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <div className={style.wrap}>
        {
            <div className="align-self-xl-center">

                <div className="container-lg overflow-hidden">
                    <div className="row gy-35">

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                <input onInput={() => setMessageError('')} onClick={() => setMessageError('')} type="email" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} placeholder="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                <input onInput={() => setMessageError('')} onClick={() => setMessageError('')} type="password" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} placeholder="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={() => handleClick(email, password)}>
                                    {title}
                                </button>
                                <span className={style.errorStyle}>{messageError}</span>
                            </div>



                    </div>
                </div>
            </div>
        }
    </div>
}

//
// return <div className={style.wrap}>
//     {
//         <div className="align-self-xl-center">
//
//         <div className="container-lg overflow-hidden">
//             <div className="row gy-35">
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
//                         <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <div id="emailHelp" className="form-text">
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                         <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="password" className="form-control" id="exampleInputPassword1" />
//                     </div>
//
// <button className="btn btn-primary" onClick={() => handleClick(email, password)}>
//     {title}
// </button>
//                 </form>
//
//             </div>
//         </div>
//         </div>
//     }
// </div>