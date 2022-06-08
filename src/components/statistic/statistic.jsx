import React, {Component, useEffect, useState} from "react";
import Menu from "../menu/menuContainer";
import BarChart from "./barChart";
import LineChart from "./DoughnutChart";
import PieChart from "./pieChart";
import style from './statistic.module.css'
import DoughnutChart from "./DoughnutChart";

const Statistic = ({accidents, listMachine, addAccidentToState}) => {

    let listNkuSystem = [];

    for (let i = 0; i < listMachine.length; i++) {
        let tempSchema = listMachine[i].schema
        if (-1 === listNkuSystem.indexOf(tempSchema)) {
            listNkuSystem.push(tempSchema)
        }
    }
    for (let j = 0; j < listNkuSystem.length; j++) {
        listNkuSystem[j] = {schema: listNkuSystem[j], count: 0}
        for (let k = 0; k < listMachine.length; k++) {
              if (listNkuSystem[j].schema === listMachine[k].schema) {
                  listNkuSystem[j].count = listNkuSystem[j].count + 1
            }
        }
    }

    function GraphicDataFunc(acc = accidents) {
        let arrayGraphicData = [];

        listMachine.map(
            machine =>
                arrayGraphicData.push({
                    machineNum: Number(machine.number),
                    countAccident: acc.filter(accident => Number(accident.numberMachine) === Number(machine.number)).length,
                    nku: machine.schema
                }))

        return arrayGraphicData;
    }

    let onDataChange = (e) => {
        let valueNku = e.currentTarget.value
        let tempGraphicData = GraphicDataFunc()
        if (valueNku === 'Все НКУ') {
            setUserData(mainState(tempGraphicData, valueNku))
        } else {
            tempGraphicData = tempGraphicData.filter(dataNku => dataNku.nku === valueNku)
            setUserData(mainState(tempGraphicData, valueNku))
        }
    }

// eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState(mainState(GraphicDataFunc()))
    const [nkuData, setNkuData] = useState(mainState(listNkuSystem))

    function mainState(arrayGraphicData, nku = 'Все НКУ') {
        return {
            labels: arrayGraphicData.map((data) => data.machineNum),
            datasets: [
                {
                    label: nku,
                    data: arrayGraphicData.map((data) => data.countAccident),
                    backgroundColor: [
                        "rgb(6,255,255)",
                        "rgb(255,53,53)",
                        "rgb(136,255,88)",
                        "rgb(166,0,163)",
                        "rgb(255,215,64)",
                        "rgb(52,88,255)",
                        "rgb(255,137,99)",
                        "rgb(238,113,255)",
                        "rgb(255,21,100)"
                    ],
                    borderColor: "#505050",
                    borderWidth: 1,
                },
            ],
        }
    }

    function DoughnutFunc(data) {
        return {
            labels: data.map((data) => data.schema),
            datasets: [
                {
                    label: 'Низковольтные комплектные устройства',
                    data: data.map((data) => data.count),
                    backgroundColor: [
                        "rgb(127,66,255)",
                        "rgb(245,44,157)",
                        "rgb(0,255,94)",
                        "rgb(0,44,255)",
                        "rgb(147,244,255)",
                        "rgb(236,119,255)",
                        "rgb(238,161,136)"
                    ],
                    borderColor: "#505050",
                    borderWidth: 1,
                },
            ],
        }
    }

    return (
        <div className="container-lg center">
        <Menu />
            <div className="row">
                <div style={{ width: 420 }}>
                    <BarChart chartData={userData} />
                </div>
                <span style={{ width: 420 }}>
                    Выберите НКУ для просмотра статистики по ЭКГ
                    <br/>
                    <br/>
                        <select onChange={onDataChange} className="form-select" aria-label="Default select example">
                            <option selected>Все НКУ</option>
                            {listNkuSystem.map(nku =>
                                <option value={nku.schema}>{nku.schema}</option>
                            )}
                        </select>
                </span>
                <div>
                    <br/>
                    <br/>
                    <br/>
                     <div style={{ width: 420 }}>
                         <DoughnutChart chartData={DoughnutFunc(listNkuSystem)} />
                     </div>
                </div>
            </div>
        </div>
        )

}
// <div style={{ width: 480 }}>
//     <LineChart chartData={userData} />
// </div>
// <div style={{ width: 480 }}>
//     <PieChart chartData={userData} />
// </div>
export default Statistic;