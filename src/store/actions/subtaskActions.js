

export const createSubtask = (subtask) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('subtask').add({
            ...subtask,
            date: new Date()
        }).then (() => {
            dispatch({ type: 'CREATE_SUBTASK', subtask})
        }).catch( (err) => {
            dispatch({ type: 'CREATE_SUBTASK_ERROR', err})
        })
    }
};

export const deleteSub = (id) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        console.log(id)
        firestore.collection('subtask').doc(id).delete().then (() => {
            dispatch({ type: 'DELETE_SUBTASK'})
        }).catch( (err) => {
            dispatch({ type: 'DELETE_SUBTASK_ERROR', err})
        })
    }
};
