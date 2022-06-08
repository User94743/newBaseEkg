import React, {useEffect, useState} from "react";
import style from './machine.module.css'
import PhotoExcavator from './images/2346595.png'
import MachineParameterChange from "./machineParameterChange";
import Menu from "../menu/menuContainer";

const Machine = ({machine, updateParameter, editDateAC, match}) => {

        let [machineNum, setMachineNum] = useState(machine.filter(m => m.number === match.params.number)[0])
        let [date, setDate] = useState(machineNum.editDate)

        return <div className="container-lg center">
            <Menu />
            <h5 className="display-5"><img width={50} src={PhotoExcavator}/> Экскаватор - №{machineNum.number}</h5>
            <p className="h4">Схема - {machineNum.schema}</p>
            {!!date ? <span>Последнее редактирование: {date}</span> :
                <span>Данная таблица еще ни кем не редактировалась</span>}

            <h5 className="display-5">Параметры</h5>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Подъем</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.ClimbUxx}
                                            parameterName={'ClimbUxx'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.ClimbIct}
                                            parameterName={'ClimbIct'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.ClimbIvz}
                                            parameterName={'ClimbIvz'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Вращение</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinUxx}
                                            parameterName={'SpinUxx'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinIct}
                                            parameterName={'SpinIct'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinIvz}
                                            parameterName={'SpinIvz'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Ход от вращения</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinHodUxx}
                                            parameterName={'SpinHodUxx'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinHodIct}
                                            parameterName={'SpinHodIct'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.SpinHodIvz}
                                            parameterName={'SpinHodIvz'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Напор</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureUxx}
                                            parameterName={'pressureUxx'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureIct}
                                            parameterName={'pressureIct'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureIvz}
                                            parameterName={'pressureIvz'} setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Ход от напора</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Холостое напряжение</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureHodUxx}
                                            parameterName={'pressureHodUxx'}
                                            setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Стопорный ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureHodIct}
                                            parameterName={'pressureHodIct'}
                                            setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.pressureHodIvz}
                                            parameterName={'pressureHodIvz'}
                                            setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ДОДК</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Ток подмотки</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dodkIpodm}
                                            setDate={setDate} editDateAC={editDateAC} parameterName={'dodkIpodm'} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток рывка</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dodkIct}
                                            setDate={setDate} editDateAC={editDateAC} parameterName={'dodkIct'} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток возбуждения</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dodkIvz}
                                            setDate={setDate} editDateAC={editDateAC} parameterName={'dodkIvz'} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Разрядная цепь</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Ток</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.dischargeСircuit}
                                            parameterName={'dischargeСircuit'}
                                            setDate={setDate} editDateAC={editDateAC} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">БУСМ</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={style.maxWidth} scope="row">Ток 1</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.busmI1}
                                            setDate={setDate} editDateAC={editDateAC} parameterName={'busmI1'} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток 2</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.busmI2}
                                            setDate={setDate} editDateAC={editDateAC} parameterName={'busmI2'} updateParameter={updateParameter}/>
                </tr>
                <tr>
                    <th scope="row">Ток 3</th>
                    <MachineParameterChange machineId={machineNum.id} machineParameter={machineNum.busmI3}
                                            setDate={setDate} editDateAC={editDateAC} parameterName={'busmI3'} updateParameter={updateParameter}/>
                </tr>
                </tbody>
            </table>
            <br/>
        </div>

}

export default Machine;