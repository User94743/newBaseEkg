const SET_INITIALIZED = 'SET-INITIALIZED';

export const setInitialized = () => ({type: SET_INITIALIZED})


export const initializeApp = (init) => (dispatch) => {
    dispatch(setInitialized());
}

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default: return state
    }

}

export default appReducer;
