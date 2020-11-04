const initState = {}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            alert(`Список дел ${action.task.title} добавлен`)
            return state;
        case 'CREATE_TASK_ERROR':
            alert(`ERROR ${action.err}`)
            return state;
        case 'DELETE_TASK':
            return state;
        case 'DELETE_TASK_ERROR':
            alert(`ERROR ${action.err}`)
            return state;
        default:
            return state;
    }
}

export default taskReducer;