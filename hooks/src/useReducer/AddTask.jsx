import { useForm } from "../hooks/useForm"

export const AddTask = ({ onAddTask }) => {

    const { formState, onInputChange, clearForm } = useForm({});

    const { description = '' } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length < 3) {
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            description: description,
            date: new Date().toUTCString(),
            done: false
        }

        onAddTask(newTask);
    }

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <input
                type='text'
                placeholder='Write the task'
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button
                className='btn btn-outline-primary mt-2'
                type='submit'
            >
                Add
            </button>
        </form>
    )
}


