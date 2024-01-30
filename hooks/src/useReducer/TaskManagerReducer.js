export const taskManagerReducer = (initialTasks, action) => {

    switch (action.type) {

        case 'Add Task':
            //action.payload contains the new task to add
            return [...initialTasks, action.payload];

        case 'Delete Task':
            return initialTasks.filter(task => task.id !== action.payload);

        default:
            return initialTasks;
    }
}