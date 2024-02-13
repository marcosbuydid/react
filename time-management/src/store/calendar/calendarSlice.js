import { createSlice } from "@reduxjs/toolkit";
import { addHours } from 'date-fns';

const eventsList = [{
}]

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: eventsList,
        activeEvent: null
    },
    reducers: {
        onSetACtiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },

        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },

        onUpdateEvent: (state, { payload }) => {
            state.events.map(event => {
                if (event._id === payload._id) {
                    return payload;
                }
                return event;
            })
        },

        onDeleteEvent: (state) => {
            if (state.activeEvent !== null) {
                state.events.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        },
    }
});

export const {
    onSetACtiveEvent, onAddNewEvent,
    onUpdateEvent, onDeleteEvent
} = calendarSlice.actions;