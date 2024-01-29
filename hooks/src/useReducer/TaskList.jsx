import { Task } from "./Task"

export const TaskList = ({ tasks = [] }) => {
    return (
        <>
            <ul className='list-group'>
                {
                    tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))
                }
            </ul>
        </>
    )
}
