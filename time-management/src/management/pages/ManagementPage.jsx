import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer } from '../../utils/calendarLocalizer';
import { Navbar } from "../components/Navbar"
import { CalendarEvent } from '../components/CalendarEvent';
import { useState } from 'react';
import { CustomModal } from '../components/CustomModal';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { AddEventButton } from '../components/AddEventButton';
import { DeleteEventButton } from '../components/DeleteEventButton';


export const ManagementPage = () => {

    const { openCustomModal } = useUiStore();

    const { events, setActiveEvent } = useCalendarStore();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const getEventProps = (event, startDate, endDate, isSelected) => { }

    const onDoubleClick = (event) => {
        openCustomModal();
    }

    const onSelect = (event) => {
        setActiveEvent(event);
    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
        setLastView(event)
    }

    return (
        <>
            <Navbar />

            <Calendar
                localizer={localizer}
                defaultView={lastView}
                events={events}
                startAccessor="startDate"
                endAccessor="endDate"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={getEventProps}
                components={{ event: CalendarEvent }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />

            <CustomModal />

            <AddEventButton />

            <DeleteEventButton />
        </>
    )
}
