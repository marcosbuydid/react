export const taskManagerReducer = (initialTasks, action) => {

    switch (action.type) {
        case 'Add Task':
            return [...initialTasks, action.payload]
            //action.payload contains the new task to add
            break;

        default:
            return initialTasks;
    }
}