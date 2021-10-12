import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import authReducer from './authReducer';

let reducers = combineReducers({
    authReducer: authReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleWare) // redux-dev tools o'rnatilgan store
    )
);
window._store_ = store;

export default store;
