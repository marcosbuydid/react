
export const Task = ({ task, onDeleteTask, onTaskFinished }) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-end'>
                <span
                    className={`p-2 flex-grow-1 bd-highlight ${task.done && 'text-decoration-line-through'}`}
                >{task.description}
                </span>
                <button
                    className='btn btn-danger'
                    onClick={() => onDeleteTask(task.id)}
                >Delete task
                </button>
                <button
                    className='btn btn-success'
                    onClick={() => onTaskFinished(task.id)}
                >Mark as done
                </button>
            </li>
        </>
    )
}