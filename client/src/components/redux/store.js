import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combineReducers';
import { getBlogs } from './action/blogAction';
import { dataList } from '../../alternative/data';


// console.log("The store here is : "+dataList);
// yeah bro this is the sub branch broo chill out

const initalState =  {};
const middleware =  [thunk];

const store = createStore(
    combineReducers,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware)),
);


export default store;