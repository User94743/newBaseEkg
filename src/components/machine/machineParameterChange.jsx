import React, {useEffect, useState} from "react";
import style from './machine.module.css'
import PhotoExcavator from './images/2346595.png'
import {editDateAC, editDateReducer} from "../../redux/parametersReducer";




const MachineParameterChange = ({machineId, machineParameter, parameterName, updateParameter, editDateAC, setDate}) => {
    const [editMode, setEditMode] = useState(false);
    const [machineParameterLocal, setMachineParameterLocal] = useState(machineParameter);

    useEffect(() => {
        setMachineParameterLocal(machineParameter)
    }, [machineParameter]);
    let activateEditMode = () => {
        setEditMode(true)}
    let deactivateEditMode = () => {

        let tempDate = new Date();

        let countDate = tempDate.getDate() < 12 ? "0" + tempDate.getDate() : tempDate.getDate();
        let monthDate = tempDate.getMonth() < 12 ? "0" + tempDate.getMonth() : tempDate.getMonth();
        let yearDate = tempDate.getFullYear();
        let hoursDate = tempDate.getHours() < 12 ? "0" + tempDate.getHours() : tempDate.getHours();
        let minutesDate =  tempDate.getMinutes() < 12 ? "0" + tempDate.getMinutes() : tempDate.getMinutes();
        let secondsDate = tempDate.getSeconds() < 12 ? "0" + tempDate.getSeconds() : tempDate.getSeconds()

        let date = "Дата: " + countDate + "." + monthDate + "." + yearDate + " Время: " + hoursDate +":"+ minutesDate +":"+ secondsDate

        updateParameter(Number(machineParameterLocal), machineId, parameterName, date)
        editDateAC(date, machineId)
        setDate(date)
        setEditMode(false)
    }
    let onParameterChange = (e) => {
        setMachineParameterLocal(e.currentTarget.value)}

    return <td>
            {!editMode && <td onClick={activateEditMode}>{machineParameterLocal}</td>}
            {editMode && <td><input onChange={onParameterChange} autoFocus={true}
             onBlur = {deactivateEditMode} value={machineParameterLocal} /></td>}
            </td>
}

export default MachineParameterChange;