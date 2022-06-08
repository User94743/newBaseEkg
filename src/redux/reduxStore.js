import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import paramsReducer from './parametersReducer.js';
import WelcomeReducer from './welcomeReducer.js';
import thunkMiddleware from "redux-thunk";
import accidentReducer from "./accidentReducer";
import appReducer from "./appReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    WelcomePage: WelcomeReducer,
    ParamsPage: paramsReducer,
    AccidentPage: accidentReducer,
    AppPage: appReducer,
    UserPage: userReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;