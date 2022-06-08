import {collection, addDoc, getDocs} from "firebase/firestore";
import db from "../fireBase";
import { doc, getDoc } from "firebase/firestore";

const ADD_ACCIDENT = 'ADD-ACCIDENT';
const DELETE_ACCIDENT = 'DELETE-ACCIDENT';
const FILTER_ARRAY = 'FILTER-ARRAY';
const INIT_TOGGLE = 'INIT-TOGGLE';
const PUSH_LIST = 'PUSH-LIST';

export const pushList = (listFire) => {
    return {
        type: PUSH_LIST,
        listFire
    }
}

export const initToggle = (init) => {
    return {
        type: INIT_TOGGLE,
        init
    }
}

export const filterArray = (filterMachine) => {
    return {
        type: FILTER_ARRAY,
        filterMachine
    }
}

export const addAccidentToState = (objAccident) => {
    return {
        type: ADD_ACCIDENT,
        objAccident
    }
}

export const deleteAccident = (idAccident) => {
    return {
        type: DELETE_ACCIDENT,
        idAccident
    }
}


let initialState = {
    init: false,
    filterArrayMachine: [],
    list: [
        {
            id: 0,
            numberMachine: 58,
            nku: '10-МК',
            clearDate: '',
            part: "Двигатель напора",
            nameAccident: "Нет возбуждения правого двигателя напора",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 1,
            numberMachine: 71,
            nku: 'Обн. эн.',
            clearDate: '',
            part: "Двигатель хода левый",
            nameAccident: "Нет хода от поворота",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 2,
            numberMachine: 8,
            nku: 'Granit',
            clearDate: '',
            part: "Двигатель хода правый",
            nameAccident: "Нет хода от напора",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 3,
            numberMachine: 70,
            nku: 'Обн. эн.',
            clearDate: '',
            part: "БУСМ",
            nameAccident: "Не работает дисплей у БУСМа",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 4,
            numberMachine: 5,
            nku: 'Granit',
            clearDate: '',
            part: "Сборка",
            nameAccident: "Замена НКУ",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 5,
            numberMachine: 12,
            nku: 'Электро Сила',
            clearDate: '',
            part: "Двигатель подъема",
            nameAccident: "Нет задания",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 6,
            numberMachine: 14,
            nku: 'Львов',
            clearDate: '',
            part: "Кузовные вентиляторы",
            nameAccident: "Нет напряжения",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        },
        {
            id: 7,
            numberMachine: 14,
            nku: 'СуперПупер',
            clearDate: '',
            part: "Командоконтроллер",
            nameAccident: "Нет задания",
            description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
            date: "21.04.2022 Время: 17:45"
        }
    ]
}
const accidentReducer = (state = initialState, action) => {
    switch (action.type) {

        case PUSH_LIST:
            return {
                ...state,
                list: action.listFire
            }

        case INIT_TOGGLE:
            return {
                ...state,
                init: action.init
            }

        case FILTER_ARRAY:
            return {
                ...state,
                filterArrayMachine: [...state.list.filter( accident => accident.numberMachine === action.filterMachine)]
            }

        case ADD_ACCIDENT:
            return {
                ...state,
                list: [...state.list, action.objAccident]
            }

        case DELETE_ACCIDENT:
            return {
                ...state,
                list: [...state.list.filter(elem => elem.id !== action.idAccident)],
                filterArrayMachine: [...state.filterArrayMachine.filter(elem => elem.id !== action.idAccident)]
            }

        default: return state;
    }
}

export const addAccidentToFireStore = (objAccident) => async (dispatch) => {
    try {
        const docRef = await addDoc(collection(db, "accidentsState"), {
            objAccident
        });
        dispatch(addAccidentToState(objAccident))

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// export const requestAccidents = () => async (dispatch) => {
//         const docRef = collection(db, "accidentsState");
//         const docSnap = await getDocs(docRef);
//         let tempArray = [];
//         docSnap.forEach((doc) => {
//             tempArray.push(doc.data().objAccident)
//         });
//         console.log(tempArray)
//         dispatch(pushList(tempArray))
//     // console.log(doc)
//     // dispatch(addAccidentToState(doc.data().objAccident))
// }

export default accidentReducer;