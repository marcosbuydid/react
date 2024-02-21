import { useDispatch, useSelector } from "react-redux"
import {
    onAddNewEvent, onClearState,
    onDeleteEvent, onLoadEvents,
    onSetACtiveEvent, onUpdateEvent
} from "../store/calendar/calendarSlice";
import managementApi from "../api/managementApi";
import { dateEventParser } from "../utils/dateEventParser";
import Swal from "sweetalert2";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetACtiveEvent(calendarEvent));
    }

    const deleteEvent = () => {
        dispatch(onDeleteEvent());
    }

    const saveEvent = async (calendarEvent) => {
        try {
            //if the event has id, update the event
            if (calendarEvent._id !== undefined) {
                await managementApi.put(`/events/${calendarEvent._id}`, calendarEvent);
                dispatch(onUpdateEvent({ ...calendarEvent }));
                window.location.reload();
            }
            else {
                //agregar el evento
                const { data } = await managementApi.post('/events', calendarEvent);
                dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user: data.event.user }));
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Cannot save event', error.response.data.msg, 'error')
        }
    }

    const loadEvents = async () => {
        try {
            const { data } = await managementApi.get('/events');
            const events = dateEventParser(data.events);
            dispatch(onLoadEvents(events));
        } catch (error) {
            console.log('Cannot load events from database');
            console.log(error);
        }
    }

    const beforeAddEvent = () => {
        dispatch(onClearState());
    }

    return {
        //props
        events,
        activeEvent,

        //methods
        setActiveEvent,
        saveEvent,
        deleteEvent,
        loadEvents,
        beforeAddEvent
    }

}
