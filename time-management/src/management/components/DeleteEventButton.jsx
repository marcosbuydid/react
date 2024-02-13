import { useCalendarStore } from '../../hooks/useCalendarStore';
import './DeleteEventButton.css';

export const DeleteEventButton = () => {

    const { deleteEvent } = useCalendarStore();

    const handleDeleteEvent = () => {
        deleteEvent();
    }

    return (
        <button
            className="btn btn-link fab-danger"
            onClick={handleDeleteEvent}
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}