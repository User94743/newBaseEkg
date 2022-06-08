const UPDATE_PARAM = 'UPDATE-PARAM';
const EDIT_DATE = 'EDIT-DATE';

export const updateParameter = (value, machineId, param, date) => {
 return {
  type: UPDATE_PARAM,
  value,
  machineId,
  param,
  date
 }
}

export const editDateAC = (date, machineId) => {
 return {
  type: EDIT_DATE,
  date,
  machineId
 }
}

let initialState = {
 machine: [
  {
   id: 0,
   number: '2',
   editDate: false,
   ClimbUxx: 640,
   ClimbIct: 1400,
   ClimbIvz: 20,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Неопознанная вещь'
  },
  {
   id: 1,
   number: '58',
   editDate: false,
   ClimbUxx: 640,
   ClimbIct: 1400,
   ClimbIvz: 20,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: '1401'
  },
  {
   id: 2,
   number: '71',
   editDate: false,
   ClimbUxx: 640,
   ClimbIct: 1400,
   ClimbIvz: 20,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Обн. эн.'
  },
  {
   id: 3,
   number: '57',
   editDate: false,
   ClimbUxx: 640,
   ClimbIct: 1400,
   ClimbIvz: 20,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: '10-МК'
  },
  {
   id: 4,
   number: '8',
   editDate: false,
   ClimbUxx: 640,
   ClimbIct: 1400,
   ClimbIvz: 20,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 5,
   number: '9',
   editDate: false,
   ClimbUxx: 5,
   ClimbIct: 5,
   ClimbIvz: 5,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 6,
   number: '11',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 7,
   number: '503',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 8,
   number: '44',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 9,
   number: '99',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 10,
   number: '55',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 11,
   number: '61',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Granit'
  },
  {
   id: 12,
   number: '70',
   editDate: false,
   ClimbUxx: 1,
   ClimbIct: 2,
   ClimbIvz: 3,
   SpinUxx: 640,
   SpinIct: 1400,
   SpinIvz: 20,
   SpinHodUxx: 640,
   SpinHodIct: 1400,
   SpinHodIvz: 20,
   pressureUxx: 640,
   pressureIct: 1400,
   pressureIvz: 20,
   pressureHodUxx: 640,
   pressureHodIct: 1400,
   pressureHodIvz: 20,
   dodkIpodm: 9,
   dodkIct: 250,
   dodkIvz: 20,
   dischargeСircuit: 150,
   busmI1: 210,
   busmI2: 210,
   busmI3: 210,
   schema: 'Обн. эн.'
  }
 ]
};
const parametersReducer = (state = initialState, action) => {

 switch(action.type) {

  case EDIT_DATE:
   return {...state,
     ...state.machine[action.machineId].editDate = action.date
   }

  case UPDATE_PARAM:
   if ('ClimbUxx' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].ClimbUxx = action.value
    }
   }
   else if('ClimbIct' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].ClimbIct = action.value
    }
   }
   else if('ClimbIvz' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].ClimbIvz = action.value
    }
   }
   else if('SpinUxx' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].SpinUxx = action.value
    }
   }
   else if('SpinIct' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].SpinIct = action.value
    }
   }
   else if('SpinIvz' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].SpinIvz = action.value
    }
   }
   else if('SpinHodUxx' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].SpinHodUxx = action.value
    }
   }
   else if('SpinHodIct' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].SpinHodIct = action.value
    }
   }
   else if('SpinHodIvz' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].SpinHodIvz = action.value
    }
   }
   else if('pressureUxx' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].pressureUxx = action.value
    }
   }
   else if('pressureIct' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].pressureIct = action.value
    }
   }
   else if('pressureIvz' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].pressureIvz = action.value
    }
   }
   else if('pressureHodUxx' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].pressureHodUxx = action.value
    }
   }
   else if('pressureHodIct' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].pressureHodIct = action.value
    }
   }
   else if('pressureHodIvz' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].pressureHodIvz = action.value
    }
   }
   else if('dodkIpodm' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].dodkIpodm = action.value
    }
   }
   else if('dodkIct' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].dodkIct = action.value
    }
   }
   else if('dodkIvz' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].dodkIvz = action.value
    }
   }
   else if('dischargeСircuit' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].dischargeСircuit = action.value
    }
   }
   else if('busmI1' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].busmI1 = action.value
    }
   }
   else if('busmI2' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].busmI2 = action.value
    }
   }
   else if('busmI3' === action.param) {
    return {
     ...state, ...state.machine[action.machineId].busmI3 = action.value
    }
   }
  default: return state;
 }
}

export default parametersReducer;