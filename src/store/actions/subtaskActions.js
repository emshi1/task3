export const createSubtask = (subtask, parrent) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tasks').doc(parrent).collection('subtasks').add({
            ...subtask,
            date: new Date()
        }).then (() => {
            firestore.collection('tasks').doc(parrent).get().then((doc) => {
            let parrentTitle = doc.data().title;
            dispatch({ type: 'CREATE_SUBTASK', subtask, parrentTitle});
            })
        }).catch( (err) => {
            dispatch({ type: 'CREATE_SUBTASK_ERROR', err})
        })
    }
};

export const deleteSub = (id,parrent) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        console.log(id)
        firestore.collection('tasks').doc(parrent).collection('subtasks').doc(id).delete().then (() => {
            dispatch({ type: 'DELETE_SUBTASK'})
        }).catch( (err) => {
            dispatch({ type: 'DELETE_SUBTASK_ERROR', err})
        })
    }
};

export const subDone = (id, value, parrent) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tasks').doc(parrent).collection('subtasks').doc(id).update({'done':value}).then (() => {
            dispatch({ type: 'SUB_DONE'})
        }).catch( (err) => {
            dispatch({ type: 'SUB_DONE_ERROR', err})
        })
    }
};


