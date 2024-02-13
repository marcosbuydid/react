import { useCalendarStore } from '../../hooks/useCalendarStore';
import { useUiStore } from '../../hooks/useUiStore';
import { addHours } from 'date-fns';
import './AddEventButton.css';

export const AddEventButton = () => {

    const { openCustomModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const addNewEvent = () => {
        setActiveEvent({
            title: '',
            notes: '',
            startDate: new Date(),
            endDate: addHours(new Date(), 1),
            user: {
                _id: 324624,
                name: 'Marcos'
            },
        })
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
