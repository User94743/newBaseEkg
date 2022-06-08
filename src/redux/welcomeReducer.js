const ENTER = 'ENTER';

export const actionCreatorEnter = () => {
    return {
        type: ENTER
    }
}

let initialState = {
 users: [
     {login: 'admin', password: 'admin'}
 ],
    enter: true
}
const welcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER: {
                return {
                    state
                };
        }
        default: return state;
    }
}

export default welcomeReducer;