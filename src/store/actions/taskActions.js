export const createTask = (task) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const user = getState().firebase.auth.uid;
        firestore.collection('tasks').add({
            ...task,
            uid: user ,
            done: 'none'
        }).then (() => {
            dispatch({ type: 'CREATE_TASK', task})
        }).catch( (err) => {
            dispatch({ type: 'CREATE_TASK_ERROR', err})
        })
    }
};


export const deleteTask = (id) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        console.log(id)
        firestore.collection('tasks').doc(id).delete().then (() => {
            dispatch({ type: 'DELETE_TASK'})
        }).catch( (err) => {
            dispatch({ type: 'DELETE_TASK_ERROR', err})
        })
    }
};
