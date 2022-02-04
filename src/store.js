import {applyMiddleware, compose, createStore} from 'redux';
import rootReducers from 'rootReducer';
import thunk from 'redux-thunk';

const middlewareEnhancer = applyMiddleware(thunk);
const devToolEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhancers = compose(middlewareEnhancer, devToolEnhancers)

const store = createStore(rootReducers, composedEnhancers);
// const store = createStore(rootReducer, undefined, composedEnhancers)


export default store;