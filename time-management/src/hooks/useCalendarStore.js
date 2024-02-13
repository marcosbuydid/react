import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetACtiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetACtiveEvent(calendarEvent));
    }

    const updateEvent = (calendarEvent) => {
        dispatch(onUpdateEvent(calendarEvent));
    }

    const deleteEvent = () => {
        dispatch(onDeleteEvent());
    }

    const saveEvent = async (calendarEvent) => {

        //if the event has id, update the event
        if (calendarEvent._id !== undefined) {
            dispatch(updateEvent({ ...calendarEvent }));
        }
        else {
            //agregar el evento
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    return {
        //props
        events,
        activeEvent,

        //methods
        setActiveEvent,
        saveEvent,
        updateEvent,
        deleteEvent,
    }

}
