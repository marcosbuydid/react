import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';
import { addHours } from 'date-fns';
import './AddEventButton.css';

export const AddEventButton = () => {

    const { openCustomModal } = useUiStore();
    const { beforeAddEvent } = useCalendarStore();

    const addNewEvent = () => {
        beforeAddEvent();
        openCustomModal();
    }

    return (
        <button
            className="btn btn-link fab"
            onClick={addNewEvent}
        >
            <i className="fa-solid fa-file-circle-plus" ></i>
        </button>
    )
}
