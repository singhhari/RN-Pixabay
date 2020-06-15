// native components
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// custom components
import photosReducer from './reducers/photosReducer';

const rootReducer = combineReducers({
    photos: photosReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store;