const SET_USER = 'SET-USER';
const REMOVE_USER = 'REMOVE-USER';
const MESSAGE_ERROR = 'MESSAGE-ERROR';

export const setMessageError = (messageErr) => {
    return {
        type: MESSAGE_ERROR,
        messageErr

    }
}

export const setUser = (email, token, id) => {
    return {
        type: SET_USER,
        email,
        token,
        id

    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

let initialState = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
    messageError: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case MESSAGE_ERROR: {
            return {
                ...state,
                messageError: action.messageErr
            };
        }

        case SET_USER:
            return {
                ...state, isAuth: !!action.email, email: action.email, token: action.token, id: action.id
            }
        case REMOVE_USER:
            return {
                ...state,
                isAuth: false, email: null, token: null, id: null
            }
        default: return state;
    }
}

export default userReducer;