export const createTask = (task) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const user = getState().firebase.auth.uid;
        firestore.collection('tasks').add({
            ...task,
            uid: user,
            done: 'none'
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', task })
        }).catch((err) => {
            dispatch({ type: 'CREATE_TASK_ERROR', err })
        })
    }
};


export const deleteTask = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        console.log(id)
        firestore.collection('tasks').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_TASK' })
        }).catch((err) => {
            dispatch({ type: 'DELETE_TASK_ERROR', err })
        })
    }
};

export const doneTask = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        console.log(id)
        let ref = firestore.collection('tasks').doc(id).collection('subtasks');
        firestore.collection('tasks').doc(id).update({ "done": "done" }).then(() => {
            let allSub = ref.get().then(s => {
                s.forEach(doc => {
                    if (doc.data().done === false)
                    {
                        firestore.collection('tasks').doc(id).update({ "done": "almoust" }).then(() => {
                            dispatch({ type: 'DONE_TASK' })
                        })
                    }
                        
                })
            })
        }).catch((err) => {
            dispatch({ type: 'DONE_TASK_ERROR', err })
        })
    }
};

export const sortTask = (value) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        if (value !== 'all' )
        firestore.collection('tasks').where("done", "==", value).get().then(() => {
            console.log()
            dispatch({ type: 'SORT_TASK' })
        }).catch((err) => {
            dispatch({ type: 'SORT_TASK_ERROR', err })
        })
        else {
            firestore.collection('tasks').get().then(() => {
                dispatch({ type: 'SORT_TASK' })
            }).catch((err) => {
                dispatch({ type: 'SORT_TASK_ERROR', err })
            })
        }
    }
};
