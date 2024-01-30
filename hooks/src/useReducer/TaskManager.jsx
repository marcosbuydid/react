import React from 'react'
import { useReducer, useEffect } from 'react'
import { taskManagerReducer } from './TaskManagerReducer'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'

const initialTasks = [];

const initializer = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TaskManager = () => {

    const [tasks, dispatch] = useReducer(taskManagerReducer, initialTasks, initializer);

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


    return (
        <>
            <h1>Task Manager</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TaskList
                        tasks={tasks}
                        onDeleteTask={handleTaskRemoval}
                        onTaskFinished={handleTaskDone}
                    />
                </div>

                <div className="col-5">

                    <h4>Add task</h4>
                    <hr />

                    <AddTask onAddTask={handleNewTask} />

                </div>
            </div>
        </>
    )
}
