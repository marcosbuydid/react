
const initialState = [{
    id: 1,
    task: 'buy plane tickets',
    done: false
}]

export const taskManagerReducer = (state = initialState, action = {}) => {

    //we add the new task to the state
    if (action.type === 'add action') {
        return [initialState, action.payload];
    }

    return state;
}

let pendingTasks = taskManagerReducer();

const newTask = {
    id: 2,
    task: 'choose hotel',
    done: false,
}

const addNewTask = {
    type: 'add action',
    payload: newTask,
}

pendingTasks = taskManagerReducer(newTask, addNewTask)

console.log({ state: pendingTasks });