import React from 'react'
import { useReducer } from 'react'
import { taskManagerReducer } from './TaskManagerReducer'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'

const initialTasks = [
    {
        id: new Date().getTime(),
        description: 'Sample Task',
        date: new Date().toUTCString(),
        done: false
    },
]

export const TaskManager = () => {

    const [tasks, dispatch] = useReducer(taskManagerReducer, initialTasks);

    const handleNewTask = (task) => {
        const action = {
            type: 'Add Task',
            payload: task
        }

        dispatch(action);
    }

    return (
        <>
            <h1>Task Manager</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TaskList tasks={tasks} />
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
