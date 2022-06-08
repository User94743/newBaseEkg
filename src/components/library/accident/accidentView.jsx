import React from "react";
import style from "./accident.module.css";
import cn from "classnames";
import {Redirect} from "react-router-dom";
const AccidentView = ({accident, key, deleteAccident, ...props}) => {

    let deleteAccidentView = (props) => {
        deleteAccident(accident.id)
    }

    return <div>
        <p>
            <span className={style.containerAccident} data-bs-toggle="collapse" href={String('#' + "key" + accident.id)}
               role="button" aria-expanded="false" aria-controls="collapseExample">
                {"ЭКГ №" + accident.numberMachine + " "}
                {accident.nameAccident + " "}

                <span className={style.rightPos}>

               <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target={'#' + 'key2' + accident.id}></button>
                </span>
                    <div class="modal fade" id={'key2' + accident.id} tabindex="-1" aria-labelledby={'key2' + accident.id}
                         aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id={'key2' + accident.id}>
            <span className={style.modalColor}>Подтвердите действие</span>

        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span className={style.modalColor}>После удаления запись невозможно восстановить. Вы точно хотите удалить? </span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button onClick={deleteAccidentView} type="button" class="btn btn-primary" data-bs-dismiss="modal">Подтвердить</button>
      </div>
    </div>
  </div>
</div>
                <span className={style.dateTime}>Дата: { accident.date}</span>
            </span>

        </p>

        <div className="collapse" id={String("key" + accident.id)}>
            <div className="card card-body">
                Схема: {" " + accident.nku}<br/>
                Узел: {" " + accident.part}<br/>
                Описание: {" " + accident.description}
            </div>
        </div>
        <br/>
    </div>

}

export default AccidentView;