import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isCustomModalOpen: false
    },
    reducers: {
        onOpenCustomModal: (state,) => {
            state.isCustomModalOpen = true;
        },
        onCloseCustomModal: (state,) => {
            state.isCustomModalOpen = false;
        },
    }
});

export const { onOpenCustomModal, onCloseCustomModal } = uiSlice.actions;