import authReducer from './authReducer'
import taskReducer from './taskReducer'
import subtaskReducer from './subtaskReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    task: taskReducer,
    subtask: subtaskReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;