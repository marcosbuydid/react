import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        loadingEvents: false,
        events: [],
        activeEvent: null
    },
    reducers: {

        onClearState: (state) => {
            state.loadingEvents = false;
            state.activeEvent = null
        },

        onSetACtiveEvent: (state, { payload }) => {
            state.loadingEvents = false;
            state.activeEvent = payload;
        },

        onAddNewEvent: (state, { payload }) => {
            state.loadingEvents = false;
            state.events.push(payload);
            state.activeEvent = null;
        },

        onUpdateEvent: (state, { payload }) => {
            state.loadingEvents = false;
            state.events.map(event => {
                if (event._id === payload._id) {
                    return payload;
                }
                return event;
            })
        },

        onDeleteEvent: (state) => {
            state.loadingEvents = false;
            if (state.activeEvent !== null) {
                state.events.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        },

        onLoadEvents: (state, { payload }) => {
            state.loadingEvents = true;
            payload.forEach(event => {
                const exists = state.events.some(dbEvent => dbEvent._id === event._id);
                if (!exists) {
                    state.events.push(event);
                }
            });
        },

        onBeforeLogout: (state) => {
            state.loadingEvents = false;
            state.events = [];
            state.activeEvent = null;
        },
    }
});

export const {
    onSetACtiveEvent, onAddNewEvent,
    onUpdateEvent, onDeleteEvent, onLoadEvents,
    onClearState, onBeforeLogout
} = calendarSlice.actions;