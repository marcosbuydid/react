import { useDispatch, useSelector } from "react-redux"
import { onOpenCustomModal, onCloseCustomModal } from "../store/ui/uiSlice";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isCustomModalOpen } = useSelector(state => state.ui);

    const openCustomModal = () => {
        dispatch(onOpenCustomModal());
    }

    const closeCustomModal = () => {
        dispatch(onCloseCustomModal());
    }

    return {
        //props
        isCustomModalOpen,

        //methods
        openCustomModal,
        closeCustomModal,
    }
}