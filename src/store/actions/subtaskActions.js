

export const createSubtask = (subtask, parrent) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        console.log(firestore.collection('tasks').doc('C3jWrgFfB8X5IS5mDAAs').collection('subtask'))
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
