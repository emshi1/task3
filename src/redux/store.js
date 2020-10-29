import taskReducer from "./task-reducer"


let store = {
    _state: {
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
                newSubtaskText: '',
                newTaskText: '',
            }
        ],

    },

    _rerender() { console.log(1); },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerender = observer;
    },


    addSubTask(postSubTask) {
        let newPost = {
            id: 4,
            value: postSubTask,
            time: new Date,
        };
        this._state.tasks.push(newPost);
        this._rerender(this._state);
    },

    dispatch(action) {

        this._state.tasks = taskReducer(this._state.tasks, action);
        this.subscribe(this._state);
    },
}


export default store;