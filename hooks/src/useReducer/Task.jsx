
export const Task = ({ task, onDeleteTask }) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span className='align-self-center'>{task.description}</span>
                <button
                    className='btn btn-danger'
                    onClick={() => onDeleteTask(task.id)}
                >Delete task
                </button>
            </li>
        </>
    )
}