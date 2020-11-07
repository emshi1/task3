const initState = {}

const subtaskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SUBTASK':
            alert(`Дело ${action.subtask.title} добавлено в список ${action.parrentTitle}`)
            return state;
        case 'CREATE_SUBTASK_ERROR':
            console.log('ERROR', action.err)
            return state;
        case 'DELETE_SUBTASK':
            console.log('3221513')
            return state;
        case 'DELETE_SUBTASK_ERROR':
            console.log('ERROR', action.err)
            return state;
        default:
            return state;
    }
}

export default subtaskReducer;