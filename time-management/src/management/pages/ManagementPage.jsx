import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { localizer } from '../../utils/calendarLocalizer';
import { Navbar } from "../components/Navbar"
import { CalendarEvent } from '../components/CalendarEvent';
import { useState } from 'react';

const user = {
    id: 324624,
    name: 'Marcos'
}

const eventsList = [{
    title: 'Math test',
    notes: 'Not forget the calculator',
    start: new Date(),
    end: addHours(new Date(), 2),
    user: user,
}]

export const ManagementPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const getEventProps = (event, start, end, isSelected) => {

    }

    const onDoubleClick = (event) => {
        console.log({ doubleClick: event })
    }

    const onSelect = (event) => {
        console.log({ click: event })
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
                events={eventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={getEventProps}
                components={{ event: CalendarEvent }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
        </>
    )
}
