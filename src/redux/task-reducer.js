const ADD_TASK = 'ADD-TASK'
const ADD_SUBTASK = 'ADD-SUBTASK'
const PUSH_SUBTASK = 'PUSH-SUBTASK'
const PUSH_TASK = 'PUSH-TASK'

let initialState = {
    tasks: [
        {
            id: 1, value: 'Task1', subtask:
                [
                    { id: 1, value: 'subtask1.1', time: '11.02.1999 22:53' },
                    { id: 2, value: 'subtask1.2', time: '11.03.1999 22:53' },
                    { id: 3, value: 'subtask1.3', time: '11.04.1999 22:53' }
                ],
            id: 2, value: 'Task2', subtask:
                [
                    { id: 1, value: 'subtask2.1', time: '11.02.1999 22:53' },
                    { id: 2, value: 'subtask2.2', time: '11.03.1999 22:53' },
                    { id: 3, value: 'subtask2.3', time: '11.04.1999 22:53' }
                ],
        }
    ],
    newSubtaskText: '',
    newTaskText: ''
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            state.newTaskText = action.text;
            return state;
        case ADD_SUBTASK:
            state.newSubtaskText = action.text;
            return state;
        case PUSH_SUBTASK:
            let text1 = state.newSubtaskText;
            state.newSubtaskText = '';
            state.subtask.push({ id: 6, value: text1, time: new Date() });
            return state;
        case PUSH_TASK:
            let text = state.newTaskText;
            state.newTaskText = '';
            state.tasks.push({ id: 3, value: text, subtask: '' });
            return state;
        default:
            return state;
    }
}

export const addTaskActionCreator = (text) => ({ type: ADD_TASK, text: text })
export const pushTaskActionCreator = () => ({ type: PUSH_TASK })
export const addSubtaskActionCreator = (text) => ({ type: ADD_SUBTASK, text: text })
export const pushSubtaskActionCreator = () => ({ type: PUSH_SUBTASK })

export default taskReducer;