import React, {useEffect, useState} from 'react';
import Menu from "../../menu/menuContainer";
import style from "./addAccident.module.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const addAccident = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [machine, setMachine] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [partMachine, setPartMachine] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [header, setHeader] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [description, setDescription] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nku, setNku] = useState(false);

    let onMachineChange = (e) => {
        let valueMachine = e.currentTarget.value
        setMachine(valueMachine)
        setNku(props.listMachine.filter(machine => machine.number === valueMachine)[0].schema)
    }
    let onPartMachineChange = (e) => {
        setPartMachine(e.currentTarget.value)
    }
    let onHeaderChange = (e) => {
        setHeader(e.currentTarget.value)
    }
    let onDescriptionChange = (e) => {
        setDescription(e.currentTarget.value)
    }
    let onAddAccident = () => {
        let countDate = dateAccident.getDate() < 12 ? "0" + dateAccident.getDate() : dateAccident.getDate();
        let monthDate = dateAccident.getMonth() < 12 ? "0" + dateAccident.getMonth() : dateAccident.getMonth();
        let yearDate = dateAccident.getFullYear();
        let hoursDate = dateAccident.getHours() < 12 ? "0" + dateAccident.getHours() : dateAccident.getHours();
        let minutesDate =  dateAccident.getMinutes() < 12 ? "0" + dateAccident.getMinutes() : dateAccident.getMinutes();

        props.addAccidentToFireStore({id: props.lengthAccidents,
            numberMachine: machine,
            nku: nku,
            clearDate: monthDate + "." + yearDate,
            part: partMachine,
            nameAccident: header,
            description: description,
            date: countDate + "." + monthDate
                + "." + yearDate + " Время: " + hoursDate +":"+ minutesDate });
        props.history.push('/accidents')
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
        const [dateAccident, onChange] = useState(new Date());

    return <div className="container-lg center">
        <Menu/>
        <h1>Введите необходимые данные и опишите проблему</h1>
        <div className={style.formBlock}>
            <select onChange={onMachineChange} className="form-select" aria-label="Default select example">
                <option selected>Выберите ЭКГ</option>
                {props.listMachine.map(m =>
                    <option value={m.number}>{m.number}</option>
                )}
            </select>
            <br/>

            <span className="input-group-text" id="basic-addon1">Узел</span>
            <input onChange={onPartMachineChange} type="text" className="form-control" placeholder="Введите название узла" aria-label="Username"
                   aria-describedby="basic-addon1"/>
            <br/>
            <span className="input-group-text" id="basic-addon1">Заголовок</span>
            <input onChange={onHeaderChange} type="text" className="form-control" placeholder="Введите заголовок" aria-label="Username"
                   aria-describedby="basic-addon1"/>
            <br/>
        </div>
        <div className={style.formBlock}>
            <Calendar onChange={onChange} value={dateAccident} />
        </div>

        <div className="input-group">
            <span className="input-group-text">Описание</span>
            <textarea onChange={onDescriptionChange} className="form-control" aria-label="With textarea"></textarea>
        </div>
        <br/>

        <button onClick={onAddAccident} type="button" className="btn btn-outline-primary">Отправить</button>

    </div>
}

export default addAccident;