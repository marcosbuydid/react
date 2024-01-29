
export const Task = ({ task }) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span className='align-self-center'>{task.description}</span>
                <button className='btn btn-danger'>Delete task</button>
            </li>
        </>
    )
}