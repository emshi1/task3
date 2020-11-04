const initState = {}

const subtaskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SUBTASK':
            console.log('sdad', action.task)
            return state;
        case 'CREATE_SUBTASK_ERROR':
            console.log('ERROR', action.err)
            return state;
        case 'DELETE_SUBTASK':
            return state;
        case 'DELETE_SUBTASK_ERROR':
            return state;
        default:
            return state;
    }
}

export default subtaskReducer;