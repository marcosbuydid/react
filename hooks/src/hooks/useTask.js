
import { useReducer, useEffect } from 'react'
import { taskManagerReducer } from '../useReducer/TaskManagerReducer'

const initializer = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const useTask = () => {
    const [tasks, dispatch] = useReducer(taskManagerReducer, [], initializer);

    const handleNewTask = (task) => {
        const action = {
            type: 'Add Task',
            payload: task
        }

        dispatch(action);
    }

    const handleTaskRemoval = (id) => {
        dispatch({
            type: 'Delete Task',
            payload: id
        });
    }

    const handleTaskDone = (id) => {
        dispatch({
            type: 'Finish Task',
            payload: id
        });
    }

    //save the tasks on local storage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    return {
        tasks,
        handleNewTask,
        handleTaskRemoval,
        handleTaskDone,
        tasksQuantity: tasks.length,
        tasksNotFinished: tasks.filter(task => !task.done).length,
    }
}
