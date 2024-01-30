import React from 'react'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { useTask } from '../hooks/useTask'

export const TaskManager = () => {

    const { tasks, handleNewTask, handleTaskRemoval, handleTaskDone, tasksQuantity, tasksNotFinished } = useTask();

    return (
        <>
            <h1>Task Manager</h1>
            <h3>Quantity: {tasksQuantity}</h3>
            <h3>Not Finished: {tasksNotFinished}</h3>
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
